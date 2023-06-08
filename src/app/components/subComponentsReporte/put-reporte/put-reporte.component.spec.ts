import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutReporteComponent } from './put-reporte.component';

describe('PutReporteComponent', () => {
  let component: PutReporteComponent;
  let fixture: ComponentFixture<PutReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
