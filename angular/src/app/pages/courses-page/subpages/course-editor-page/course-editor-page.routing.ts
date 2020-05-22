import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseEditorPageComponent } from './course-editor-page.component';

const routes: Routes = [
  { path: '', component: CourseEditorPageComponent },
  { path: ':courseId', component: CourseEditorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseEditorPageRoutingModule {}
