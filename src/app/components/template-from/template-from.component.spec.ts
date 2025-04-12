import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFromComponent } from './template-from.component';

describe('TemplateFromComponent', () => {
  let component: TemplateFromComponent;
  let fixture: ComponentFixture<TemplateFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
