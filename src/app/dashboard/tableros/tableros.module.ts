import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { Tablero4x4Component } from './tablero4x4/tablero4x4.component';

import { CeldaComponent } from './celda/celda.component';
import { TablerosRoutingModule } from '../tableros-routing.module';



@NgModule({
  declarations: [
    Tablero4x4Component,
    CeldaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TablerosRoutingModule,
  ],
  exports:[Tablero4x4Component]
})
export class TablerosModule { }
