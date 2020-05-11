import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../../../../app.interfaces';
import { DatabaseService } from '../../../../shared/database.service';

@Component({
  selector: 'app-student-editor-page',
  templateUrl: './student-editor-page.component.html',
  styleUrls: ['./student-editor-page.component.scss']
})
export class StudentEditorPageComponent implements OnInit, OnDestroy {

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
  }
}