import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CodeEditorPageComponent } from './code-editor-page.component';

const routes: Routes = [
  { path: '', component: CodeEditorPageComponent },
  { path: ':codeId', component: CodeEditorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeEditorPageRoutingModule {}
