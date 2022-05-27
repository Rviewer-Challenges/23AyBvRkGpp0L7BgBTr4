import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JuegoService } from '../../services/juego.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  constructor(private juegoService:JuegoService) { 
    
  }

  ngOnInit(): void {
  }

}
