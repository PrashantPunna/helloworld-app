import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostExampleComponent } from './post-example.component';

describe('PostExampleComponent', () => {
  let component: PostExampleComponent;
  let fixture: ComponentFixture<PostExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
