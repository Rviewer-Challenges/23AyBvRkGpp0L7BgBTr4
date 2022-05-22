import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { Tablero4x4Component } from './tableros/tablero4x4/tablero4x4.component';
import { Tablero4x6Component } from './tableros/tablero4x6/tablero4x6.component';
import { Tablero5x6Component } from './tableros/tablero5x6/tablero5x6.component'; 

const routes:Routes=[
  { path:'tablero4x4', component:Tablero4x4Component },
  { path:'tablero4x6', component:Tablero4x6Component },
  { path:'tablero5x6',component:Tablero5x6Component }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],exports:[RouterModule]
})
export class TablerosRoutingModule { }
