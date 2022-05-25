import { Component, OnInit } from '@angular/core';
import { casilla } from '../../../interfaces/casilla.interface';
import { JuegoService } from '../../../services/juego.service';

@Component({
  selector: 'app-tablero4x4',
  templateUrl: './tablero4x4.component.html',
  styleUrls: ['./tablero4x4.component.css']
})
export class Tablero4x4Component implements OnInit {

  public restantes: number = 0;
  public movimientos: number = 0;

  public matriz: casilla[][] = [];

  casillaPulsada: casilla = {
    valor: 0,
    x: 0,
    y: 0,
    estado: false
  };

  constructor(public juegoService: JuegoService) {

    this.juegoService.crearMatriz(4, 4);
    this.matriz = this.juegoService.matriz;
  }

  ngOnInit(): void { }

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
      // pulsa la misma casilla
      //TO DO voltear la casilla 
      console.log('Ha pulsado la misma casilla, capullo');
      this.juegoService.voltear(this.casillaPulsada);
      this.resetearPulsada();
      return;
    } 
    if (this.casillaPulsada.valor === valor.valor) { // casillas iguales

      console.log('iguales');
      this.juegoService.cambiarEstado(this.casillaPulsada, valor);
      this.juegoService.iguales();
      this.resetearPulsada();
      if (this.juegoService.parejasRestantes === 0) {
        console.log('terminado')
      }
      
    } else {
      console.log('diferentes');
      setTimeout(() => {

        console.log('casilla1',this.casillaPulsada);
        console.log('casilla2',valor);

        this.juegoService.voltear(this.casillaPulsada);
        this.juegoService.voltear(valor);
        this.resetearPulsada();
      }, 300);      
      //this.igualesService.celda$.emit(false);
    }
  }

}


