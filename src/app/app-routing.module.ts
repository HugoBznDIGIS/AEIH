import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from './restauranteComponent/restaurante/restaurante.component';
import { FormComponent as RestauranteFormComponent } from './restauranteComponent/form/form.component';

const routes: Routes = [
  { path: "restaurante", component: RestauranteComponent },
  { path: "restaurante/form", component: RestauranteFormComponent },
  { path: "restaurante/form/:id", component: RestauranteFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
