import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosVehiculoComponent } from './gastos-vehiculo.component';

describe('GastosVehiculoComponent', () => {
  let component: GastosVehiculoComponent;
  let fixture: ComponentFixture<GastosVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GastosVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
