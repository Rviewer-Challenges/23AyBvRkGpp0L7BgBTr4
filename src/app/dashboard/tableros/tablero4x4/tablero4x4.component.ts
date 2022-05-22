import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero4x4',
  templateUrl: './tablero4x4.component.html',
  styleUrls: ['./tablero4x4.component.css']
})
export class Tablero4x4Component implements OnInit {

  
  public matriz:number[][]=[[1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8],]

  constructor() { }

  ngOnInit(): void {
  }

}
