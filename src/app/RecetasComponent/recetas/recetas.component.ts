import { Component, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/services/receta/receta.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  constructor(private serviciorecetas: RecetaService) {}

  resultAPI: any[] = [];
  ngOnInit(): void {
    this.cargarRecetas
  }

  cargarRecetas(): void {
    this.serviciorecetas.obtenerDatos().subscribe(
      (datos) => {
        this.resultAPI = datos.receta;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
