import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { TablerosRoutingModule } from '../tableros-routing.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    TablerosRoutingModule,
    
  ],
  exports:[
    InicioComponent
  ]
})
export class DashboardModule { }
