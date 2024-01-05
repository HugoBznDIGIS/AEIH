import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetaService } from '../services/receta/receta.service';
import { Recetas } from '../interfaces/receta-interface';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    //Almacenamos el ID
    id: string | null = null;
    //Datos formulario
    PostRecetas: FormGroup;
    //GetById
    receta: any = {};
    constructor (private route: ActivatedRoute, private formBuilder: FormBuilder, private recetaService: RecetaService, private router: Router) {
        this.PostRecetas = this.formBuilder.group({
          Nombre: ['',Validators.required],
          Descripcion: ['',Validators.required],
          Ingrediente: this.formBuilder.group({
            IdIngredientes: [0, Validators.required]
          }),
          Pais: this.formBuilder.group({
            IdPais: [0, Validators.required]
          }),
          Imagen: [''],
          Porcion: [0, Validators.required]
        })
    }

    ngOnInit(): void {
      this.route.paramMap.subscribe(params =>{
        this.id = params.get("id");
      });

      if(this.id !== null) {
        this.recetaService.getbyid(this.id).subscribe(
           result => {
            this.receta = result;
            this.cargarFormulario();
           },
           error => {
              console.log(`Error: ${error}`);
           }
        )
      }
    };

    cargarFormulario(): void {
      this.PostRecetas.patchValue({
        Nombre: this.receta.Nombre,
        Descripcion: this.receta.Descripcion,
        Ingrediente: {
          id: this.receta.IdIngredientes
        },
        Pais: {
          id: this.receta.IdPais
        },
        Imagen: this.receta.Imagen,
        Porcion: this.receta.Porcion
      })
    }

    enviarPost(){
      if (this.PostRecetas.valid) {
        const datosReceta: Recetas = this.PostRecetas.value;

        if (this.id) {
          //PUT
          this.recetaService.update(this.id, datosReceta).subscribe(
            respuesta => {
              alert("Se ha actualizado de manera correcta");
              this.router.navigate(['/receta']);
            },
            error => {
              console.log(error);
            }
          )
        }
        else {
          this.recetaService.postDatos(datosReceta).subscribe(
            respuesta => {
              alert("Se ha agregado correctamente");
              this.router.navigate(['receta']);
            },
            error => {
              console.log(error);
            }
          )
        }
      }
    }
}