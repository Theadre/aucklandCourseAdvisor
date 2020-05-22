import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { CourseEditorPageComponent } from './course-editor-page.component';
import { CourseEditorPageRoutingModule } from './course-editor-page.routing';

@NgModule({
  declarations: [CourseEditorPageComponent],
  imports: [
    CommonModule,
    CourseEditorPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  exports: [CourseEditorPageComponent],
})
export class CourseEditorPageModule {}
