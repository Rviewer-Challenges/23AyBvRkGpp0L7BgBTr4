import { Injectable } from '@angular/core';
import { casilla } from '../interfaces/casilla.interface';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  public movimientosRealizados: number = 0;
  public parejasRestantes: number = 0;
  public matriz: casilla[][] = [];
  public seconds:number=10;
  public terminado:boolean=false;
  public mensaje:string='';
  private alto:number=0;
  private ancho:number=0;
  private contador=timer(0,1000);
  private clock:any;


  constructor() { }

  cambiarEstado(casilla1:casilla,casila2:casilla){
    this.matriz[casilla1.x][casilla1.y].estado=true;            
    this.matriz[casila2.x][casila2.y].estado=true;   
  }

  descubrir(casilla:casilla){
    const celda = document.querySelector(`#span${casilla.x}${casilla.y}`);
    
    if(celda?.classList.contains('color')){
      celda?.classList.remove('color');
    }
  }
  tapar(casilla:casilla){
    const celda = document.querySelector(`#span${casilla.x}${casilla.y}`);
    if (!celda?.classList.contains('color')){
      celda?.classList.add('color');
    }
  } 

  iguales(){
    this.parejasRestantes--;
    if (this.parejasRestantes === 0) {//completa el tablero antes del tiempo y gana
      this.terminado=true;
      this.tableroCompletado();    
      this.mostrarMensaje(); 
      
    }
  }

  pulsado(){
    this.movimientosRealizados++;
  }

  estaDescubierta(casilla:casilla):boolean{
    return this.matriz[casilla.x][casilla.y].estado;
  }


  resetarTablero(){  
    const tablero = document.querySelector('#tablero');    
    tablero?.classList.remove('tablero4x4');
    tablero?.classList.remove('tablero4x6');
    tablero?.classList.remove('tablero5x6');  
    
  }
  crearTablero(){
    const tablero = document.querySelector('#tablero'); 
    if ((this.ancho==4) && (this.alto==4)){
      tablero?.classList.add('tablero4x4');      
    }
    else{
      if ((this.ancho==4) && (this.alto==6)){
        tablero?.classList.add('tablero4x6')
      }else{
        tablero?.classList.add('tablero5x6')
      }
    }
  }

  crearMatriz() {    
    this.matriz=[];
    let k: number = 0;   

    for (let j = 0; j < this.alto; j++) {
      let fila = [];
      for (let i = 0; i < this.ancho; i++) {
        k++;
        let celda: casilla = {
          valor: k,
          x: j,
          y: i,
          estado: false
        }
        fila.push(celda); 
        if (k===(this.alto*this.ancho)/2){
          k=0;
        }    
       
      }
      this.matriz.push(fila);
    } 
  }


  inicializarContadores(){
    this.parejasRestantes=(this.alto * this.ancho) / 2 ;
    this.movimientosRealizados=0;
    this.terminado=false;
  }

  tableroCompletado(){
    if (this.terminado){ // ganó
      this.mensaje=`Ganaste con ${this.movimientosRealizados} movimientos en ${this.seconds} segundos`;
    }
    if(this.clock){
      this.clock.unsubscribe();
      
      
    }    
  }


  mostrarMensaje(){
    const mensaje = document.querySelector('.mensaje');
    console.log(mensaje)
    mensaje?.classList.remove('oculto');
  }

  iniciarJuego(alto:number,ancho:number){
    this.alto=alto;
    this.ancho=ancho;
    this.resetarTablero();        
    this.crearMatriz();    
    this.crearTablero();   
    this.inicializarContadores();
    this.mensaje='';
    this.seconds=60;
    this.clock=this.contador.subscribe(()=>{
      this.seconds--;
      
      if (this.seconds==0){
        this.terminado=false;
        this.clock.unsubscribe();
        this.mensaje='Perdiste'
        this.mostrarMensaje();
        //se acaba el tiempo y pierde
      }
    })

  }


}
