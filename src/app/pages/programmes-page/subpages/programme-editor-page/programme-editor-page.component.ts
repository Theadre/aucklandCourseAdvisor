import { Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Programme } from '../../../../app.interfaces';
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

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public readonly database: DatabaseService,
    private readonly formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.programmeId = params && params.programmeId ? params.programmeId : null;
    });
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  private initializeForm(c: Programme): void {
  }

  public onFormSubmit(e: Event): void {
    e.preventDefault();
    const formData: Programme = this.programmeForm.value;
    console.log(formData);
    console.log(this.programmeForm.valid);

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