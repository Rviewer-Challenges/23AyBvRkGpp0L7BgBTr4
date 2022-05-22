import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { InicioComponent } from './dashboard/inicio/inicio.component';
import { TableroComponent } from './dashboard/tablero/tablero.component';




const routes:Routes=[
  { path:'inicio',component:InicioComponent },
  { path:'tablero',component:TableroComponent },
  { path:'**',redirectTo:'/inicio' }  
]


@NgModule({ 
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})


export class AppRoutingModule { }
