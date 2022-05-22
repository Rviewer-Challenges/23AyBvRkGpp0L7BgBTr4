import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tablero4x4Component } from './tablero4x4/tablero4x4.component';
import { Tablero4x6Component } from './tablero4x6/tablero4x6.component';
import { Tablero5x6Component } from './tablero5x6/tablero5x6.component';




@NgModule({
  declarations: [
    Tablero4x4Component,
    Tablero4x6Component,
    Tablero5x6Component,
  
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Tablero4x4Component,
    Tablero4x6Component,
    Tablero5x6Component
  ]
})
export class TablerosModule { }
