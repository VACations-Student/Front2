import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarPorCoordenadasComponent } from './lugar-por-coordenadas.component';

describe('LugarPorCoordenadasComponent', () => {
  let component: LugarPorCoordenadasComponent;
  let fixture: ComponentFixture<LugarPorCoordenadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugarPorCoordenadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugarPorCoordenadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
