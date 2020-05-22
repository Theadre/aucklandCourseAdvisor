import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgrammesPageComponent } from './programmes-page.component';

const routes: Routes = [{ path: '', component: ProgrammesPageComponent},
{
  path: 'add',
  loadChildren: () => import('./subpages/programme-editor-page/programme-editor-page.module').then((m) => m.ProgrammeEditorPageModule),
},
{
  path: 'edit/:programmeId',
  loadChildren: () => import('./subpages/programme-editor-page/programme-editor-page.module').then((m) => m.ProgrammeEditorPageModule),
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammesPageRoutingModule {}
