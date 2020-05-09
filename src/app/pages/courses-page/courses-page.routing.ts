import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesPageComponent } from './courses-page.component';

const routes: Routes = [
  { path: '', component: CoursesPageComponent },
  {
    path: 'add',
    loadChildren: () => import('./subpages/course-editor-page/course-editor-page.module').then((m) => m.CourseEditorPageModule),
  },
  {
    path: 'edit/:courseId',
    loadChildren: () => import('./subpages/course-editor-page/course-editor-page.module').then((m) => m.CourseEditorPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}
