import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredienteComponent } from './ingredienteComponent/ingrediente/ingrediente.component';
import { IngredienteGetAllComponent } from './ingredienteComponent/ingrediente/ingrediente-get-all/ingrediente-get-all.component';

const routes: Routes = [
  {path: "ingredienteForm", component: IngredienteComponent},
  {path: "ingredienteForm/:idIngrediente", component: IngredienteComponent},
  {path: "ingredienteGetAll", component: IngredienteGetAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
