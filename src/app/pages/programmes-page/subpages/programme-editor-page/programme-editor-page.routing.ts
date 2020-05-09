import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgrammeEditorPageComponent } from './programme-editor-page.component';

const routes: Routes = [
  { path: '', component: ProgrammeEditorPageComponent },
  { path: ':programmeId', component: ProgrammeEditorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammeEditorPageRoutingModule {}
