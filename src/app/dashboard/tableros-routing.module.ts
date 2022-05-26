import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { Tablero4x4Component } from './tableros/tablero4x4/tablero4x4.component';
import { BrowserModule } from '@angular/platform-browser';



const routes:Routes=[
  { path:'tablero/tablero4x4/:alto/:ancho', component:Tablero4x4Component },
  
]

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],exports:[RouterModule]
})
export class TablerosRoutingModule { }
