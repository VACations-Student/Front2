import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReportesComponent } from './get-reportes.component';

describe('GetReportesComponent', () => {
  let component: GetReportesComponent;
  let fixture: ComponentFixture<GetReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
