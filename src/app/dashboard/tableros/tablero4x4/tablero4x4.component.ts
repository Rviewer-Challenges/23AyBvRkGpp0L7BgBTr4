import { Component, OnInit } from '@angular/core';
import { IgualesService } from 'src/app/services/iguales.service';
import { casilla } from '../../../interfaces/casilla.interface';

@Component({
  selector: 'app-tablero4x4',
  templateUrl: './tablero4x4.component.html',
  styleUrls: ['./tablero4x4.component.css']
})
export class Tablero4x4Component implements OnInit {

  public restantes:number=0;
  public movimientos:number=0;

  public matriz: number[][] = [[1, 2, 3, 4], [5, 6, 7, 8], [1, 2, 3, 4], [5, 6, 7, 8],]

  casillaPulsada: casilla = {
    valor: 0,
    x: 0,
    y: 0,
    descubierta: false
  };

  constructor( public igualesService:IgualesService) { }

  ngOnInit(): void {

    this.restantes=8;

  }
  
  
  
  resetearPulsada() {
    this.casillaPulsada = {
      valor: 0,
      x: 0,
      y: 0,
      descubierta: false
    }
  }


  mismaCasilla(casilla1: casilla, casilla2: casilla): boolean {
    return (casilla1.x === casilla2.x) && (casilla1.y === casilla2.y);
  }

  celdaPulsada(valor: casilla) {

    this.movimientos++;

    if (valor.descubierta != true) {
      if (this.casillaPulsada.valor === 0) {
        this.casillaPulsada.valor = valor.valor;
        this.casillaPulsada.x = valor.x;
        this.casillaPulsada.y = valor.y;
        this.casillaPulsada.descubierta = valor.descubierta;
      } else {
        if (this.mismaCasilla(this.casillaPulsada, valor)) {
          console.log('Ha pulsado la misma casilla, capullo');
          this.resetearPulsada();
          return;
        } else {
          if (this.casillaPulsada.valor === valor.valor) {
            console.log('iguales');
            console.log(this.casillaPulsada);
            //this.igualesService.celda$.emit(true);
            let posicion = `#span${this.casillaPulsada.x}${this.casillaPulsada.y}`;
            console.log(posicion);
            document.querySelector(`#span${this.casillaPulsada.x}${this.casillaPulsada.y}`)?.classList.add('color');
            document.querySelector(`#span${valor.x}${valor.y}`)?.classList.add('color');
            document.querySelector(`#span${this.casillaPulsada.x}${this.casillaPulsada.y}`)?.setAttribute('descubierta','ok');
            document.querySelector(`#span${valor.x}${valor.y}`)?.setAttribute('descubierta','ok');
            this.restantes=this.restantes-1;
            if (this.restantes===0){
              console.log('terminado')
            }
          }
          else {
            console.log('diferentes');
           //this.igualesService.celda$.emit(false);
          }
          this.resetearPulsada();
        }
      }
    }else{
      console.log('casilla descubierta');
    }

  }

}
