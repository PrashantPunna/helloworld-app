import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersExerciseComponent } from './followers-exercise.component';

describe('FollowersExerciseComponent', () => {
  let component: FollowersExerciseComponent;
  let fixture: ComponentFixture<FollowersExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
