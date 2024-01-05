import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetasComponent } from './RecetasComponent/recetas/recetas.component';
import { FormComponent } from './form/form.component';
import { RestauranteComponent } from './restauranteComponent/restaurante/restaurante.component';
import { FormComponent as FormRestaurante } from './restauranteComponent/form/form.component';
import { IngredienteGetAllComponent } from './ingredienteComponent/ingrediente/ingrediente-get-all/ingrediente-get-all.component';
import { IngredienteComponent } from './ingredienteComponent/ingrediente/ingrediente.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    RestauranteComponent,
    FormComponent,
    FormRestaurante,
    IngredienteGetAllComponent,
    IngredienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
