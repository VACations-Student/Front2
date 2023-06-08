import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLugarComponent } from './post-lugar.component';

describe('PostLugarComponent', () => {
  let component: PostLugarComponent;
  let fixture: ComponentFixture<PostLugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
