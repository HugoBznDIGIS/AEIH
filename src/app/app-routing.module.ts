import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './RecetasComponent/recetas/recetas.component';  
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: "recetas", component: RecetasComponent },
  { path: "form" , component: FormComponent },
  { path: "form/:id", component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
