import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncendioPorLugarComponent } from './incendio-por-lugar.component';

describe('IncendioPorLugarComponent', () => {
  let component: IncendioPorLugarComponent;
  let fixture: ComponentFixture<IncendioPorLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncendioPorLugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncendioPorLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
