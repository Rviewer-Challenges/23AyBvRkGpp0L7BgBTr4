import { EventEmitter, Injectable } from '@angular/core';
import { casilla } from '../interfaces/casilla.interface';

@Injectable({
  providedIn: 'root'
})
export class IgualesService {

  celda$ = new EventEmitter<boolean>();

  constructor() { }
}
