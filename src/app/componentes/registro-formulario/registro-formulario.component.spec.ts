import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFormularioComponent } from './registro-formulario.component';

describe('RegistroFormularioComponent', () => {
  let component: RegistroFormularioComponent;
  let fixture: ComponentFixture<RegistroFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
