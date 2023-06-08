import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchLugarComponent } from './patch-lugar.component';

describe('PatchLugarComponent', () => {
  let component: PatchLugarComponent;
  let fixture: ComponentFixture<PatchLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchLugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
