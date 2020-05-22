import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeEditorPageComponent } from './programme-editor-page.component';

describe('ProgrammeEditorPageComponent', () => {
  let component: ProgrammeEditorPageComponent;
  let fixture: ComponentFixture<ProgrammeEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeEditorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
