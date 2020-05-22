import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentEditorPageComponent } from './student-editor-page.component';

const routes: Routes = [
  { path: '', component: StudentEditorPageComponent },
  { path: ':id', component: StudentEditorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentEditorPageRoutingModule {}
