import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLugarComponent } from './get-lugar.component';

describe('GetLugarComponent', () => {
  let component: GetLugarComponent;
  let fixture: ComponentFixture<GetLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
