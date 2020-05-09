import { Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Programme, ProgrammeCode } from '../../../../app.interfaces';
import { DatabaseService } from '../../../../shared/database.service';

@Component({
  selector: 'app-programme-editor-page',
  templateUrl: './programme-editor-page.component.html',
  styleUrls: ['./programme-editor-page.component.scss']
})
export class ProgrammeEditorPageComponent implements OnInit, OnDestroy {

  public programmeId: string;
  public programmeForm: FormGroup;
  public shouldLoadForm: boolean = false;
  private routeSubscription: Subscription;
  public programmeCodes: ProgrammeCode[];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public readonly database: DatabaseService,
    private readonly formBuilder: FormBuilder
  ) { }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  public onFormSubmit(e: Event): void {
    e.preventDefault();
    const formData: Programme = this.programmeForm.value;
    console.log(formData);
    console.log(this.programmeForm.valid);

    this.routeSubscription = this.route.params.subscribe((params) => {
      this.programmeId = params && params.programmeId ? params.programmeId : null;
      this.database
        .getProgrammeCodes()
        .then((storedProgrammeCodes) => {
          this.programmeCodes = storedProgrammeCodes;
        })
        .finally(() => {
          this.database
            .getCourse(this.programmeId)
            .then(
              (storedProgramme) => {
                // if the course can retrieve the course data correctly!
                this.initializeForm(storedProgramme);
              },
              () => {
                // if the database can't find the selected course or there is no course id in url then asume is new course
                this.initializeForm({
                  id: this.database.generateId(),
                  title: null,
                  date: new Date().toDateString()
                });
              }
            )
            .finally(() => {
              this.shouldLoadForm = true;
            });
        });

    });


    // save new programme
    if (this.programmeForm.valid && !this.programmeId) {
      this.database.saveProgramme(formData).then(() => {
        this.router.navigate(['/programmes']);
      });
    }

    // update programme
    if (this.programmeForm.valid && this.programmeId) {
      this.database.updateProgramme(formData).then(() => {
        this.router.navigate(['/programmes']);
      });
    }
  }
  private initializeForm(c: Programme): void {
    function generateFormFields(programmeCodesIds: string[], allProgrammeCodes: ProgrammeCode[]): boolean[] {
      const generatedArray = Array(allProgrammeCodes.length).fill(false);
      programmeCodesIds.forEach((programmeId) => {
        const index = allProgrammeCodes.findIndex((programmeCode) => programmeCode.id === programmeId);
        if (index !== -1) {
          generatedArray[index] = true;
        }
      });
      return generatedArray;
    }
  }
  items = [
    'Carrots',
    'Tomatoes',
    'Onions',
    'Apples',
    'Avocados'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}