import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent implements OnInit {

  @Input() value:number=0;

  @Output() OnPulsado:EventEmitter<number>=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  pulsado(){
    console.log(this.value);
    this.OnPulsado.emit(this.value);   

  }

}
