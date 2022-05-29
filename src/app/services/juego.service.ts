import { Injectable } from '@angular/core';
import { casilla } from '../interfaces/casilla.interface';
import { timer } from 'rxjs';
import { Imagen } from '../interfaces/imagen.interface';

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
  private imagenes:Imagen[]=[
    {valor:1,url:'../../assets/images/Abraham_Simpson.webp'},
    {valor:2,url:'../../assets/images/Bart_mostrando_el_trasero.webp'},
    {valor:3,url:'../../assets/images/Bart_Simpson.webp'},
    {valor:4,url:'../../assets/images/Bart_y_Homero_sl.webp'},
    {valor:5,url:'../../assets/images/Capitulo-los-simpson-bart-el-desobediente-temporada-22_1.webp'},
    {valor:6,url:'../../assets/images/Cerebro.webp'},
    {valor:7,url:'../../assets/images/Doh.webp'},
    {valor:8,url:'../../assets/images/Homero-1-.webp'},
    {valor:9,url:'../../assets/images/Lisa_Simpson.webp'},
    {valor:10,url:'../../assets/images/LisaGuay.webp'},
    {valor:11,url:'../../assets/images/Maggie.webp'},
    {valor:12,url:'../../assets/images/Maggie_Simpson.webp'},
    {valor:13,url:'../../assets/images/Marge_Simpson.webp'},
    {valor:14,url:'../../assets/images/Homer-simpson.webp'},
    {valor:15,url:'../../assets/images/Marge_Simpson2.webp'},
    
  ];



  constructor() { }

  shuffle(array:any[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {
  
      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  cambiarEstado(casilla1:casilla,casila2:casilla){
    this.matriz[casilla1.x][casilla1.y].estado=true;            
    this.matriz[casila2.x][casila2.y].estado=true;   
  }

  descubrir(casilla:casilla){
    const celda = document.querySelector(`#span${casilla.x}${casilla.y}`);
    const img = document.querySelector(`#span${casilla.x}${casilla.y} > img`);    
    
    if(celda?.classList.contains('color')){
      celda?.classList.remove('color');
      img?.classList.remove('oculta');
    }
  }
  tapar(casilla:casilla){
    const celda = document.querySelector(`#span${casilla.x}${casilla.y}`);
    const img = document.querySelector(`#span${casilla.x}${casilla.y} > img`);
    if (!celda?.classList.contains('color')){
      celda?.classList.add('color');
      img?.classList.add('oculta');
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
    let k: number = 1;   
    const imagenesDesordenadas= this.shuffle( this.imagenes );
    
    for (let j = 0; j < this.alto; j++) {
      let fila = [];
      for (let i = 0; i < this.ancho; i++) {
       
        let celda: casilla = {
          valor: imagenesDesordenadas[k].valor,
          x: j,
          y: i,
          estado: false,
          url:imagenesDesordenadas[k].url,
        }
        fila.push(celda); 
        fila=this.shuffle(fila);
        if (k===(this.alto*this.ancho)/2){
          k=0;
        }    
        k++;
      }
      this.matriz.push(this.shuffle(fila));
    } 
  }


  inicializarContadores(){
    this.parejasRestantes=(this.alto * this.ancho) / 2 ;
    this.movimientosRealizados=0;
    this.terminado=false;
  }

  tableroCompletado(){
    if (this.terminado){ // ganó
      const restante = 60-this.seconds
      this.mensaje=`Ganaste con ${this.movimientosRealizados} movimientos en ${restante} segundos`;
    }
    if(this.clock){
      this.clock.unsubscribe();
      
      
    }    
  }


  mostrarMensaje(){
    const mensaje = document.querySelector('.mensaje');    
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
