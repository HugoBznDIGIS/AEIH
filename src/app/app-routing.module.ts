import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './RecetasComponent/recetas/recetas.component';  

const routes: Routes = [
  { path: "recetas", component: RecetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
