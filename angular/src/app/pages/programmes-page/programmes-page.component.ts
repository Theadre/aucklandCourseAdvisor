import { Component, OnInit } from '@angular/core';
import { Programme } from 'src/app/app.interfaces';
import { DatabaseService } from 'src/app/shared/database.service';

@Component({
  selector: 'app-programmes-page',
  templateUrl: './programmes-page.component.html',
  styleUrls: ['./programmes-page.component.scss']
})
export class ProgrammesPageComponent implements OnInit {

  public displayedColumns: string[] = ['title', 'date', 'actions'];
  public dataSource: Programme[];

  constructor(public readonly database: DatabaseService) {}

  public ngOnInit(): void {
    this.database.getProgrammes().then((programmes) => {
      this.dataSource = programmes;
    });
  }

  public onDeleteButton(id: string): void {
    // remove from database
    this.database.removeProgramme(id).then(() => {
      // on success remove from the page
      const programmesIndex = this.dataSource.findIndex((c) => c.id === id);
      // this.dataSource.splice(courseIndex, 1);
      console.log(this.dataSource);
      console.log(programmesIndex);
    });
  }

}
