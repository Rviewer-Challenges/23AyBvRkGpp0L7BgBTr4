import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { casilla } from 'src/app/interfaces/casilla.interface';
import { IgualesService } from '../../../services/iguales.service';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent implements OnInit {

  @Input() value: number = 0;
  @Input() x: number = 0;
  @Input() y: number = 0;
  iguales: boolean = false;

  casilla: casilla = {
    valor: this.value,
    x: this.x,
    y: this.y,
    descubierta: false
  };

  @Output() OnPulsado: EventEmitter<casilla> = new EventEmitter<casilla>();

  constructor(public igualesService: IgualesService) { }

  ngOnInit(): void {
    /* this.igualesService.celda$.subscribe(estado=>{
       this.iguales=estado;
     })*/
  }

  pulsado() {

    this.casilla = {
      valor: this.value,
      x: this.x,
      y: this.y,
      descubierta: false
    };
    const casillaFisica = document.querySelector(`#span${this.casilla.x}${this.casilla.y}`)?.getAttribute('descubierta');
    console.log(casillaFisica);
    if (casillaFisica===null){
      this.OnPulsado.emit(this.casilla);
    }

  }

  ocultar(): string {
    if (this.iguales) {
      return "oculta";
    }
    else {
      return "";
    }

  }
}
