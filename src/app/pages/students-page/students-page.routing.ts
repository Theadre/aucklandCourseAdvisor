import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsPageComponent } from './students-page.component';

const routes: Routes = [{ path: '', component: StudentsPageComponent},
{
  path: 'add',
  loadChildren: () => import('./subpages/student-editor-page/student-editor-page.module').then((m) => m.StudentEditorPageModule),
},
{
  path: 'edit/:studentId',
  loadChildren: () => import('./subpages/student-editor-page/student-editor-page.module').then((m) => m.StudentEditorPageModule),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsPageRoutingModule {}
