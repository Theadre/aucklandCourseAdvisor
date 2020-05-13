//import { Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../../../../app.interfaces';
import { DatabaseService } from '../../../../shared/database.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-editor-page',
  templateUrl: './student-editor-page.component.html',
  styleUrls: ['./student-editor-page.component.scss']
})

export class StudentEditorPageComponent implements OnInit {
   
  private routeSubscription: Subscription;
  
  myForm: FormGroup;
   id: number;

   o = new Student();
   constructor(private fb: FormBuilder, private route: ActivatedRoute
    , private service: DatabaseService, private router: Router) { }

 
    ngOnInit() {
      this.createForm();
      this.id = +this.route.snapshot.paramMap.get('id');
      console.log(this.id);
       if (this.id !== 0) {
        this.service.getById(this.id).subscribe(r => {
          this.o = r;
          this.createForm();
        });
      } 
    }

    createForm() {
      this.myForm = this.fb.group({
        id: this.o.id,
        firstName: [this.o.firstName, [Validators.required]],
        lastName: [this.o.lastName, [Validators.required]],
        date: new Date().toDateString(),
        //degree: [this.o.degree, [Validators.required]],
      });
    }

    submit(o: Student) {
      if (this.id === 0) {
        this.o.date = new Date().toDateString();
        this.service.post(o).subscribe(r => {
        this.router.navigate(['/students']);
        });
      } 
       else {
        this.service.put(o.id, o).subscribe(r => {
          this.router.navigate(['/students']);
        });
      } 
    }

/*
  public studentId: string;
  public studentForm: FormGroup;
  public shouldLoadForm: boolean = false;
  private routeSubscription: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public readonly database: DatabaseService,
    private readonly formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.studentId = params && params.studentId ? params.studentId : null;
    });
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  private initializeForm(c: Student): void {
  }

  public onFormSubmit(e: Event): void {
    e.preventDefault();
    const formData: Student = this.studentForm.value;
    console.log(formData);
    console.log(this.studentForm.valid);

    // save new student
    if (this.studentForm.valid && !this.studentId) {
      this.database.saveStudent(formData).then(() => {
        this.router.navigate(['/students']);
      });
    }

    // update student
    if (this.studentForm.valid && this.studentId) {
      this.database.updateStudent(formData).then(() => {
        this.router.navigate(['/students']);
      });
    }
  } */
}