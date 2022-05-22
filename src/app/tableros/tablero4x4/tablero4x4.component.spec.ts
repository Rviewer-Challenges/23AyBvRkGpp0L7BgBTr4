import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablero4x4Component } from './tablero4x4.component';

describe('Tablero4x4Component', () => {
  let component: Tablero4x4Component;
  let fixture: ComponentFixture<Tablero4x4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tablero4x4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablero4x4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
