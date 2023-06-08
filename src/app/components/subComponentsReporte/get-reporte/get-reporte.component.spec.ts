import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReporteComponent } from './get-reporte.component';

describe('GetReporteComponent', () => {
  let component: GetReporteComponent;
  let fixture: ComponentFixture<GetReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
