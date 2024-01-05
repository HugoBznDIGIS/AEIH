import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestauranteServiceService } from 'src/app/services/restaurante/restaurante-service.service';
import { RestaurantePost } from 'src/app/interfaces/restaurante-interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id: number | null = null;
  dataPost: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private restauranteService: RestauranteServiceService, private router: Router) {
    this.dataPost = this.formBuilder.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      direccion: ['', Validators.required],
      calificacion: [0, Validators.required],
      idPais: [0, Validators.required]
    });
  };

  ngOnInit(): void {
    
  };

  enviarDatos() {
    if (this.dataPost.valid) {
      const datosRestaurante: RestaurantePost = this.dataPost.value;

      if (this.id) {
        // PUT
      } else {
        // ADD
        this.restauranteService.postData(datosRestaurante).subscribe(
          (response) => {
            alert("Se ha agregado correctamente");
            this.router.navigate(['/restaurante']);
          },
          (error) => {
            alert("Ha ocurrido un error al agregar");
          }
        )
      }
    }
  };
}
