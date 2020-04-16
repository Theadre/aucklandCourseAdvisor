import { of } from 'rxjs'; // service aux requetes HTTP
import { Course } from './course';
import { Injectable } from '@angular/core';
import { DbFakeService } from './db-fake.service';



@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // constructeur avec la base de données en reference
  constructor(private db: DbFakeService) { }

  // Affichage de toutes les recettes se trouvant dans DbFakeService
  getAll() {
    return of(this.db.courses);
  }

  // Affichage d'une recette se trouvant dans DbFakeService
  getById(id: number) {
    const i = this.db.courses.findIndex(e => e.id === id);
    const r: Course = this.db.courses[i];
    return of(r);
  }

  //Ajout d'une recette
  post(modelCourse: Course) {
    modelCourse.id = this.db.courses.length + 1;
    const i = this.db.courses.push(modelCourse);
    return of(i);
  }

  // Modification d'une recette
  put(id: number, modelCourse: Course) {
    const i = this.db.courses.findIndex(e => e.id === id);
    this.db.courses[i] = modelCourse;
    return of(i);
  }

  // Suppression d'une recette se trouvant dans DbFakeService
  delete(id: number) {
    const i = this.db.courses.findIndex(e => e.id === id);
    this.db.courses.splice(i, 1);
    return of(i);
  }
}