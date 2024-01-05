import { Component, OnInit } from '@angular/core';
import { IngredienteService } from 'src/app/services/ingrediente/ingrediente.service';
import { PaisesService } from 'src/app/services/Paises/paises.service';
import { CategoriaService } from 'src/app/services/Categoria/categoria.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingrediente',
  templateUrl: './ingrediente.component.html',
  styleUrls: ['./ingrediente.component.css']
})
export class IngredienteComponent {

  postIngrediente: FormGroup;
  idIngrediente: string | null = null;
  base64Imagen: string | undefined;
  ingrediente: any = {}

  constructor(private ServicioIngredientes: IngredienteService, 
    private PaisService: PaisesService,
    private CategoriaService: CategoriaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router){
      this.postIngrediente = this.formBuilder.group({
        nombre: ['', Validators.required],
        idPais: [0, Validators.required],
        imagen: ['', Validators.required],
        idCategoria: [0, Validators.required]
      });
    }

  resultApi: any[] = [];
  resultPaises: any[] = [];
  resultCategorias: any[] = [];

  ngOnInit(): void{
    this.GetPaises();
    this.GetCategorias();
    this.route.paramMap.subscribe(params => {
      this.idIngrediente = params.get('idIngrediente');
    });
    if(this.idIngrediente){
      this.ServicioIngredientes.getById(this.idIngrediente).subscribe(
        result => {
          this.ingrediente = result.value;
          this.CargarFormulario();
        },
        error => {
          console.log("Error al obtener el registro. " + error);
        }
      );
    }
  }
  GetPaises(): void{
    this.PaisService.getAll().subscribe(
      (datos) => {
        this.resultPaises = datos.Objects;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  GetCategorias(): void{
    this.CategoriaService.getAll().subscribe(
      (datos) => {
        this.resultCategorias = datos.Objects;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Save() {
    if(this.postIngrediente.valid){
      const datosIngrediente: any = this.postIngrediente.value;
      if(this.idIngrediente){
        this.ServicioIngredientes.update(this.idIngrediente, datosIngrediente).subscribe(
          respuesta => {
            alert("Se ha actualizado de manera correcta.");
            this.router.navigate(['/ingredienteGetAll']);
          },
          error => {
            console.log(error);
          }
        )
      }
      else{
        this.ServicioIngredientes.add(datosIngrediente).subscribe(
          response => {
            alert("Se ha agregado correctamente el ingrediente.");
            this.router.navigate(['/ingredienteGetAll']);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
    else{
      alert('Por favor complete todos los campos obligatorios (*).');
    }
  }
  ChangeView(){
    this.router.navigate(['/ingredienteGetAll']);
  }
  CargarFormulario(): void {
    // Recuperando los valores del Ingrediente a editar
    this.postIngrediente.patchValue({
      nombre: this.ingrediente.Nombre,
      idPais: this.ingrediente.Pais.IdPais,
      imagen: this.ingrediente.Imagen,
      idCategoria: this.ingrediente.Categoria.IdCategoria
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const extensionesPermitidas = ['.jpg', '.jpeg', '.png'];
      const fileExtension = this.getFileExtension(file.name);

      if (extensionesPermitidas.includes(fileExtension)) {
        this.convertToBase64(file);
      } else {
        alert('Formato de archivo no válido. Por favor, selecciona una imagen con formato .jpg, .jpeg o .png.');
      }
    }
  }
  convertToBase64(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String: string = reader.result as string;
      this.base64Imagen = base64String;
      this.postIngrediente.patchValue({
        imagen: base64String
      });
    };

    reader.readAsDataURL(file);
  }
  private getFileExtension(fileName: string): string {
    return '.' + fileName.split('.').pop();
  }
}
