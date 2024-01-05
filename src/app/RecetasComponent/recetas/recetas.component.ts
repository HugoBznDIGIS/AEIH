import { Component, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/services/receta/receta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
})
export class RecetasComponent implements OnInit {

  constructor(private serviciorecetas: RecetaService, private router: Router) {}

  resultAPI: any[] = [];

  ngOnInit(): void {
    this.cargarRecetas();
  }

  cargarRecetas(): void {
    this.serviciorecetas.obtenerDatos().subscribe(
      (datos) => {
        this.resultAPI = datos.Objects;
        console.log(this.resultAPI);        
      },
      (error) => {
        console.log(error);
      }
    )
  }

  deleteRecetas(id: string): void {
    this.serviciorecetas.deleteRecetas(id).subscribe(
      respuesta => {
        alert("Se ha eliminado correctamente");
        this.cargarRecetas();
      },
      error => {
        alert(`Error: ${error}`);
      }
    )
  }

  //Navegar con ID
  formId(id: string): void {
    //Navegamos a la vista del form con el id
    this.router.navigate(['/recetas/form', id])
  }
  
    
}
