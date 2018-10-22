import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDownasaurComponent } from './listado-downasaur.component';

describe('ListadoDownasaurComponent', () => {
  let component: ListadoDownasaurComponent;
  let fixture: ComponentFixture<ListadoDownasaurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDownasaurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDownasaurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
