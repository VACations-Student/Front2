import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLugarComponent } from './delete-lugar.component';

describe('DeleteLugarComponent', () => {
  let component: DeleteLugarComponent;
  let fixture: ComponentFixture<DeleteLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
