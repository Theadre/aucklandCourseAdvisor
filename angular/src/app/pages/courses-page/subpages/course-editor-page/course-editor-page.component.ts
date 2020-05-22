import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Course, CourseCode } from '../../../../app.interfaces';
import { DatabaseService } from '../../../../shared/database.service';

@Component({
  selector: 'app-course-editor-page',
  templateUrl: './course-editor-page.component.html',
  styleUrls: ['./course-editor-page.component.scss'],
})
export class CourseEditorPageComponent implements OnInit, OnDestroy {
  public courseId: string;
  public courseCodes: CourseCode[];
  public courseForm: FormGroup;
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
      this.courseId = params && params.courseId ? params.courseId : null;
      this.database
        .getCourseCodes()
        .then((storedCourseCodes) => {
          this.courseCodes = storedCourseCodes;
        })
        .finally(() => {
          this.database
            .getCourse(this.courseId)
            .then(
              (storedCourse) => {
                // if the course can retrieve the course data correctly!
                this.initializeForm(storedCourse);
              },
              () => {
                // if the database can't find the selected course or there is no course id in url then asume is new course
                this.initializeForm({
                  id: this.database.generateId(),
                  code: null,
                  date: new Date().toDateString(),
                  title: null,
                  description: null,
                  prerequisits: [],
                  restrictions: [],
                  semester: { first: false, second: false },
                  valueArea: { one: false, two: false, three: false, four: false },
                  value: null,
                });
              }
            )
            .finally(() => {
              this.shouldLoadForm = true;
            });
        });
    });
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  private initializeForm(c: Course): void {
    function generateFormFields(courseCodesIds: string[], allCourseCodes: CourseCode[]): boolean[] {
      const generatedArray = Array(allCourseCodes.length).fill(false);
      courseCodesIds.forEach((courseId) => {
        const index = allCourseCodes.findIndex((courseCode) => courseCode.id === courseId);
        if (index !== -1) {
          generatedArray[index] = true;
        }
      });
      return generatedArray;
    }
    console.log(generateFormFields(c.restrictions, this.courseCodes));
    this.courseForm = this.formBuilder.group({
      id: [c.id, Validators.required],
      code: [c.code, Validators.required],
      date: [c.date],
      title: [c.title, Validators.required],
      description: [c.description],
      prerequisits: [null],
      restrictions: this.formBuilder.array(generateFormFields(c.restrictions, this.courseCodes)),
      semester: this.formBuilder.group({
        first: [c.semester.first],
        second: [c.semester.second],
      }),
      valueArea: this.formBuilder.group({
        one: [c.valueArea.one],
        two: [c.valueArea.two],
        three: [c.valueArea.three],
        four: [c.valueArea.four],
      }),
      value: [c.value],
    });
  }

  public onFormSubmit(e: Event): void {
    e.preventDefault();
    const formData: Course = this.courseForm.value;
    console.log(formData);
    console.log(this.courseForm.valid);

    // save new course course
    if (this.courseForm.valid && !this.courseId) {
      this.database.saveCourse(formData).then(() => {
        this.router.navigate(['/courses']);
      });
    }

    // update course
    if (this.courseForm.valid && this.courseId) {
      this.database.updateCourse(formData).then(() => {
        this.router.navigate(['/courses']);
      });
    }
  }

  public parseCourseCoudeId(id: string): CourseCode {
    return this.courseCodes.find((cc) => cc.id === id);
  }

  // This getter is needed cause: https://github.com/angular/angular-cli/issues/6099
  get formRestrictionsData(): FormArray {
    return this.courseForm.get('restrictions') as FormArray;
  }
}
