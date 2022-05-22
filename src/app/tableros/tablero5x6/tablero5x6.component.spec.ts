import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablero5x6Component } from './tablero5x6.component';

describe('Tablero5x6Component', () => {
  let component: Tablero5x6Component;
  let fixture: ComponentFixture<Tablero5x6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablero5x6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablero5x6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
