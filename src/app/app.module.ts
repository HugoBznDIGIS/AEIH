import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredienteGetAllComponent } from './ingredienteComponent/ingrediente/ingrediente-get-all/ingrediente-get-all.component';
import { IngredienteComponent } from './ingredienteComponent/ingrediente/ingrediente.component';

@NgModule({
  declarations: [
    AppComponent,
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
