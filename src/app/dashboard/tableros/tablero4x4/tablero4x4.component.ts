import { Component, OnInit, enableProdMode } from '@angular/core';
import { casilla } from '../../../interfaces/casilla.interface';
import { JuegoService } from '../../../services/juego.service';
import { ActivatedRoute,Params, Router } from '@angular/router';

@Component({
  selector: 'app-tablero4x4',
  templateUrl: './tablero4x4.component.html',
  styleUrls: ['./tablero4x4.component.css']
})
export class Tablero4x4Component implements OnInit {
   

  casillaPulsada: casilla = {
    valor: 0,
    x: 0,
    y: 0,
    estado: false
  };

  constructor(public juegoService: JuegoService,private rutaActiva:ActivatedRoute, private router:Router) {
    
  }

  ngOnInit(): void {    
    this.juegoService.tableroCompletado();
    const ancho = parseInt( this.rutaActiva.snapshot.params['ancho'] );
    const alto = parseInt( this.rutaActiva.snapshot.params['alto'] );
    this.juegoService.iniciarJuego(alto,ancho);    
  }

  resetearPulsada() {
    this.casillaPulsada = {
      valor: 0,
      x: 0,
      y: 0,
      estado: false
    }
  }


  mismaCasilla(casilla1: casilla, casilla2: casilla): boolean {
    return (casilla1.x === casilla2.x) && (casilla1.y === casilla2.y);
  }

  celdaPulsada(valor: casilla) {

    if (this.casillaPulsada.valor === 0)//no hay casilla anterior
    {
      this.casillaPulsada = valor; // guardamos la primera casilla pulsada del par a comprobar
      return;
    } 
    if (this.mismaCasilla(this.casillaPulsada, valor)) { // esta es la segunda casilla del par
             
      this.juegoService.tapar(valor);
      this.resetearPulsada();
      return;
    } 
    if (this.casillaPulsada.valor === valor.valor) { // casillas iguales
      
      this.juegoService.cambiarEstado(this.casillaPulsada, valor);
      this.juegoService.iguales();
      this.resetearPulsada();
      if (this.juegoService.parejasRestantes === 0) {
        alert('Ganaste!!')
        //completa el tablero antes del tiempo y gana
        this.juegoService.tableroCompletado();
      }
      
    } else {
      console.log('diferentes');
      setTimeout(() => {        
        this.juegoService.tapar(this.casillaPulsada);
        this.juegoService.tapar(valor);
        this.resetearPulsada();
      }, 300);      
      
    }
  }  

}


