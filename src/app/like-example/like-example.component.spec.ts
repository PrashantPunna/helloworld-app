import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeExampleComponent } from './like-example.component';

describe('LikeExampleComponent', () => {
  let component: LikeExampleComponent;
  let fixture: ComponentFixture<LikeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
