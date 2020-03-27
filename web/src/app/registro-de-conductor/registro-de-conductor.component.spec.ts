import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeConductorComponent } from './registro-de-conductor.component';

describe('RegistroDeConductorComponent', () => {
  let component: RegistroDeConductorComponent;
  let fixture: ComponentFixture<RegistroDeConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDeConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDeConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
