import { Component } from '@angular/core';
import { IngredienteService } from 'src/app/services/ingrediente/ingrediente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingrediente-get-all',
  templateUrl: './ingrediente-get-all.component.html',
  styleUrls: ['./ingrediente-get-all.component.css']
})
export class IngredienteGetAllComponent {
  constructor(private IngredienteService: IngredienteService,
    private router: Router){}

  ingredientes: any[] = [];
  ngOnInit(){
    this.GetAll();
  }
  GetAll(): void{
    this.IngredienteService.getAll().subscribe(
      (datos) => {
        this.ingredientes = datos;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  Delete(idIngrediente: string){
    this.IngredienteService.delete(idIngrediente).subscribe(
      respuesta => {
        alert('Se ha eliminado correctamente.');
      },
      error => {
        alert('Error: '+ error);
      }
    );
  }
  Form(idIngrediente: string){
    this.router.navigate(['/ingredienteForm', idIngrediente]);
  }
  NuevoIngrediente(){
    this.router.navigate(['/ingredienteForm']);
  }
}
