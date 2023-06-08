import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantIncendiosFechaComponent } from './cant-incendios-fecha.component';

describe('CantIncendiosFechaComponent', () => {
  let component: CantIncendiosFechaComponent;
  let fixture: ComponentFixture<CantIncendiosFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantIncendiosFechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantIncendiosFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
