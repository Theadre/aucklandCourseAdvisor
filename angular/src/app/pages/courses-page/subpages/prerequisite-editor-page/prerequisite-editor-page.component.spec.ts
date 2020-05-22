import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrerequisiteEditorPageComponent } from './prerequisite-editor-page.component';

describe('PrerequisiteEditorPageComponent', () => {
  let component: PrerequisiteEditorPageComponent;
  let fixture: ComponentFixture<PrerequisiteEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrerequisiteEditorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrerequisiteEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
