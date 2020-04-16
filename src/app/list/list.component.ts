import { Course } from '../course'; // Model course
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service'; // Service course

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: Course[] = [];

  // Constructeur incluant le service
  constructor(private service: CourseService) { }

  ngOnInit() {
    //Lancer la liste de recettes
    this.getAll();
  }

  // Methode permettant d'afficher toutes les recettes
  getAll() {
    this.service.getAll().subscribe(r => {
      this.list = r;
    });
  }

  // Bouton de suppression d'une recette se trouvant dans le service
  delete(id) {
    this.service.delete(id).subscribe(r => {
      this.getAll(); 
    });
  }

}
