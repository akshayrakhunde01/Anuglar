import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiFormComponent } from './post-api-form.component';

describe('PostApiFormComponent', () => {
  let component: PostApiFormComponent;
  let fixture: ComponentFixture<PostApiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostApiFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
