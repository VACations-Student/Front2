import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchReporteComponent } from './patch-reporte.component';

describe('PatchReporteComponent', () => {
  let component: PatchReporteComponent;
  let fixture: ComponentFixture<PatchReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
