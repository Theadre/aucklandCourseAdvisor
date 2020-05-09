import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditorPageComponent } from './course-editor-page.component';

describe('CourseEditorPageComponent', () => {
  let component: CourseEditorPageComponent;
  let fixture: ComponentFixture<CourseEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEditorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
