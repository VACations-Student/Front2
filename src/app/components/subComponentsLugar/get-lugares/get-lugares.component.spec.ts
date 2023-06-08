import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLugaresComponent } from './get-lugares.component';

describe('GetLugaresComponent', () => {
  let component: GetLugaresComponent;
  let fixture: ComponentFixture<GetLugaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLugaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
