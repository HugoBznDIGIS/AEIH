import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './RecetasComponent/recetas/recetas.component';
import { FormComponent } from './form/form.component';
import { RestauranteComponent } from './restauranteComponent/restaurante/restaurante.component';
import { FormComponent as RestauranteFormComponent } from './restauranteComponent/form/form.component';
import { IngredienteComponent } from './ingredienteComponent/ingrediente/ingrediente.component';
import { IngredienteGetAllComponent } from './ingredienteComponent/ingrediente/ingrediente-get-all/ingrediente-get-all.component';

const routes: Routes = [
  { path: "recetas", component: RecetasComponent },
  { path: "recetas/form", component: FormComponent },
  { path: "recetas/form/:id", component: FormComponent },
  { path: "restaurante", component: RestauranteComponent },
  { path: "restaurante/form", component: RestauranteFormComponent },
  { path: "restaurante/form/:id", component: RestauranteFormComponent },
  { path: "ingredienteGetAll", component: IngredienteGetAllComponent },
  { path: "ingredienteForm", component: IngredienteComponent },
  { path: "ingredienteForm/:idIngrediente", component: IngredienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
