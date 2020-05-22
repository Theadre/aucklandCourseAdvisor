import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditorPageComponent } from './student-editor-page.component';

describe('StudentEditorPageComponent', () => {
  let component: StudentEditorPageComponent;
  let fixture: ComponentFixture<StudentEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEditorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
