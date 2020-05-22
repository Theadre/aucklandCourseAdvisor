import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'programmes', loadChildren: () => import('./pages/programmes-page/programmes-page.module').then((m) => m.ProgrammesPageModule) },
  { path: 'courses', loadChildren: () => import('./pages/courses-page/courses-page.module').then((m) => m.CoursesPageModule) },
  { path: 'students', loadChildren: () => import('./pages/students-page/students-page.module').then((m) => m.StudentsPageModule) },
  { path: '**', loadChildren: () => import('./not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
