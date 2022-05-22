import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { Tablero4x4Component } from './tablero4x4/tablero4x4.component';
import { DashboardModule } from '../dashboard.module';
import { CeldaComponent } from './celda/celda.component';



@NgModule({
  declarations: [
    Tablero4x4Component,
    CeldaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    
  ],
  exports:[Tablero4x4Component]
})
export class TablerosModule { }
