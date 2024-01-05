import { Component, OnInit } from '@angular/core';
import { IngredienteService } from 'src/app/services/ingrediente/ingrediente.service';

@Component({
  selector: 'app-ingrediente',
  templateUrl: './ingrediente.component.html',
  styleUrls: ['./ingrediente.component.css']
})
export class IngredienteComponent {
  constructor(private ServicioIngredientes: IngredienteService){}

  resultApi: any[] = [];

  ngOnInit(): void{
    this.GetAll();
  }

  GetAll(): void{
    this.ServicioIngredientes.getAll().subscribe(
      (datos) => {
        this.resultApi = datos.Objects;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
