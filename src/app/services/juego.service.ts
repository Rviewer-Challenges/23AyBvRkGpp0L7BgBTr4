import { Injectable } from '@angular/core';
import { casilla } from '../interfaces/casilla.interface';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  public movimientosRealizados: number = 0;
  public parejasRestantes: number = 0;
  public matriz: casilla[][] = [];

  constructor() { }

  cambiarEstado(casilla1:casilla,casila2:casilla){
    this.matriz[casilla1.x][casilla1.y].estado=true;            
    this.matriz[casila2.x][casila2.y].estado=true;   

  }


  


  voltear(casilla:casilla){
    const celda = document.querySelector(`#span${casilla.x}${casilla.y}`); 
    console.log(celda);
    if (celda?.classList.contains('color')){
      celda?.classList.remove('color');
    }else{
      celda?.classList.add('color');
    }
    
  }

  iguales(){
    this.parejasRestantes--;
  }

  pulsado(){
    this.movimientosRealizados++;
  }

  estaDescubierta(casilla:casilla):boolean{
    return this.matriz[casilla.x][casilla.y].estado;
  }

  crearMatriz(alto: number, ancho: number) {
    let k: number = 0;   

    for (let j = 0; j < ancho; j++) {
      let fila = [];
      for (let i = 0; i < alto; i++) {
        k++;
        let celda: casilla = {
          valor: k,
          x: i,
          y: j,
          estado: false
        }
        fila.push(celda); 
        if (k===8){
          k=0;
        }    
       
      }
      this.matriz.push(fila);
    } 
    this.inicializarRestantes(alto,ancho);   
  }

  inicializarRestantes(alto:number,ancho:number){
    this.parejasRestantes=(alto * ancho) / 2 ;
  }
}
