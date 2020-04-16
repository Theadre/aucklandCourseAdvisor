import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  //Creation de l'objet en lien avec le model recette
  modelCourse = new Course();

  //le constructeur
  constructor(private route: ActivatedRoute, private service: CourseService) { }

  ngOnInit() {

    //Recherche de l'ID
    const id = +this.route.snapshot.paramMap.get('id');

    // Affichage de l'objet modelRecipe à l'aide de l'attribut getById(id) dans le service recipe
    this.service.getById(id).subscribe(r => {
      this.modelCourse = r;
    });
  }

}