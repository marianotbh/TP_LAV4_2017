import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoDownasaurComponent } from './juego-downasaur.component';

describe('JuegoDownasaurComponent', () => {
  let component: JuegoDownasaurComponent;
  let fixture: ComponentFixture<JuegoDownasaurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoDownasaurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoDownasaurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
