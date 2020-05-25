import { Component, OnInit } from '@angular/core';
import { Code } from 'src/app/app.interfaces';
import { CodeService } from 'src/app/shared/code.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'code', 'courseId', 'date', 'actions'];
  public dataSource: Code[];

  constructor(public serivce: CodeService) {}

  public ngOnInit(): void {
    // this.getAll();
    this.serivce.test().subscribe(r => console.log(r))
  }

  public getAll(): void {
    this.serivce.get().subscribe((courses) => {
      this.dataSource = courses;
    });
  }

  public onDeleteButton(id: string): void {
    // remove from database
    this.serivce.delete(id).subscribe(() => {
      this.getAll();
    });
  }

}
