import { Component, OnInit } from '@angular/core';

import { Course } from '../../app.interfaces';
import { DatabaseService } from '../../shared/database.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
})
export class CoursesPageComponent implements OnInit {
  public displayedColumns: string[] = ['title', 'date', 'actions'];
  public dataSource: Course[];

  constructor(public readonly database: DatabaseService) {}

  public ngOnInit(): void {
    this.database.getCourses().then((courses) => {
      this.dataSource = courses;
    });
  }

  public onDeleteButton(id: string): void {
    // remove from database
    this.database.removeCourse(id).then(() => {
      // on success remove from the page
      const courseIndex = this.dataSource.findIndex((c) => c.id === id);
      // this.dataSource.splice(courseIndex, 1);
      console.log(this.dataSource);
      console.log(courseIndex);
    });
  }
}
