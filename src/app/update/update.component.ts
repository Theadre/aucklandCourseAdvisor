import { Course } from '../course';
import { CourseService } from '../course.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  myForm: FormGroup;
  id = 0;
  modelCourse = new Course();
  title = 'Add Course'; // par default au mode creation

  // Le constructeur incluant le mode formulaire, les routes et le service
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: CourseService, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.id = +this.route.snapshot.paramMap.get('id');
    // Si l'ID est existant alors mode modification
    if (this.id !== 0) {
      this.title = 'Edit'
      this.service.getById(this.id).subscribe(r => {
        this.modelCourse = r;
        this.createForm();
      });
    }
  }

  // Fonction appelée par la condition passant en mode modification
  createForm() {
    this.myForm = this.fb.group({
      id: this.modelCourse.id,
      code: [this.modelCourse.code, [Validators.required]],
      title: [this.modelCourse.title, [Validators.required]],
      prerequisites: [this.modelCourse.prerequisites, [Validators.required]],
      restrictions: [this.modelCourse.restrictions, [Validators.required]],
      semesterFirst: [this.modelCourse.semester.first, [Validators.required]],
      semesterSecond: [this.modelCourse.semester.second, [Validators.required]],
      description: [this.modelCourse.description, [Validators.required]],
    });
  }

  //Bouton de validation
  submit(modelCourse: Course) {
    console.log(modelCourse)
    // si création 
    if (this.id === 0) {
      this.service.post(modelCourse).subscribe(r => {
        // retour à la liste de recettes
        this.router.navigate(['/list']);
      });
      // Si modification
    } else {
      this.service.put(modelCourse.id, modelCourse).subscribe(r => {
        // retour à la liste de recettes
        this.router.navigate(['/list']);
      });

    }
  }
}