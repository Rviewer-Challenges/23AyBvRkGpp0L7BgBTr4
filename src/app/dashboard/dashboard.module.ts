import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { TableroComponent } from './tablero/tablero.component';
import { BrowserModule } from '@angular/platform-browser';
import { TablerosRoutingModule } from './tableros-routing.module';
import { TablerosModule } from './tableros/tableros.module';


@NgModule({
  declarations: [
    InicioComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TablerosRoutingModule,
    TablerosModule    
  ],
  exports:[
    InicioComponent,
    TableroComponent
  ]
})
export class DashboardModule { }
