import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/interfaces/restaurante-interface';
import { RestauranteServiceService } from 'src/app/services/restaurante/restaurante-service.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {
  dataAPI: Restaurante[] = [];

  constructor(private restauranteService: RestauranteServiceService, private router: Router) { }
  ngOnInit(): void {
    this.cargarRestaurantes();
  }

  cargarRestaurantes(): void {
    this.restauranteService.getAll().subscribe(
      (data) => {
        console.log(data);

        this.dataAPI = data;
        console.log(this.dataAPI);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  deleteRestaurante(id: number): void {
    if (confirm("Esta seguro de querer eliminarlo?")) {
      this.restauranteService.delete(id).subscribe(
        (response) => {
          alert("Se ha eliminado correctamente");
          this.cargarRestaurantes();
        },
        (error) => {
          console.log(error);
        }
      );
    };
  };

  edit(id: number): void {
    this.router.navigate(['restaurante/form', id]);
  };
}
