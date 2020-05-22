import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/app.interfaces';

import { DatabaseService } from 'src/app/shared/database.service';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit {

  public displayedColumns: string[] = ['title', 'date', 'actions'];
  public dataSource: Student[];

  constructor(public readonly database: DatabaseService) {}

  public ngOnInit(): void {
    this.database.getStudents().then((students) => {
      this.dataSource = students;
    });
  }

  public onDeleteButton(id: number): void {
    // remove from database
    this.database.removeStudent(id).then(() => {
      // on success remove from the page
      const studentsIndex = this.dataSource.findIndex((c) => c.id === id);
      console.log(this.dataSource);
      console.log(studentsIndex);
    });
  }

}
