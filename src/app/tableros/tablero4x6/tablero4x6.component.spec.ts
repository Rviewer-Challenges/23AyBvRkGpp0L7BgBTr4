import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablero4x6Component } from './tablero4x6.component';

describe('Tablero4x6Component', () => {
  let component: Tablero4x6Component;
  let fixture: ComponentFixture<Tablero4x6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablero4x6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablero4x6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
