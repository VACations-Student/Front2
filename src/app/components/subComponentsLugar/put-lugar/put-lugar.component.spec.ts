import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutLugarComponent } from './put-lugar.component';

describe('PutLugarComponent', () => {
  let component: PutLugarComponent;
  let fixture: ComponentFixture<PutLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutLugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
