import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReporteComponent } from './post-reporte.component';

describe('PostReporteComponent', () => {
  let component: PostReporteComponent;
  let fixture: ComponentFixture<PostReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
