import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAgilidadComponent } from './juego-agilidad.component';

describe('JuegoAgilidadComponent', () => {
  let component: JuegoAgilidadComponent;
  let fixture: ComponentFixture<JuegoAgilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoAgilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoAgilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
