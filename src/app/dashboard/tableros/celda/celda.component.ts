import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { casilla } from 'src/app/interfaces/casilla.interface';
import { JuegoService } from '../../../services/juego.service';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent implements OnInit {

  @Input()
  contenido: casilla={
    valor: 0,
    x: 0,
    y: 0,
    estado: false
  }; 

  

  @Output() OnPulsado: EventEmitter<casilla> = new EventEmitter<casilla>();

  constructor(public juegoService:JuegoService) { }

  ngOnInit(): void {
 
  }

  pulsado() {    
        
    this.juegoService.pulsado();
    
    if ( !this.juegoService.estaDescubierta(this.contenido) ){
   
      this.juegoService.descubrir(this.contenido);
      this.OnPulsado.emit(this.contenido);
    }
    

  }
 
}
