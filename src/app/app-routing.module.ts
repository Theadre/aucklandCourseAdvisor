import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //Accès à la liste des recette en HomePage
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  // inscrire liste dans l'adresse si liste des recettes
  { path: 'list', component: ListComponent },
  //inscrire detail/(N° de la recette) dans l'adresse si visualisation d'une recette 
  { path: 'detail/:id', component: DetailComponent },
  //inscrire update/(N° de la recette) dans l'adresse si modification d'une recette
  { path: 'update/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
