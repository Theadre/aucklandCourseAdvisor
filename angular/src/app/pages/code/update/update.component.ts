import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'q';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Code } from 'src/app/app.interfaces';
import { CodeService } from 'src/app/shared/code.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  public myForm: FormGroup;

  o = new Code();
  id = 0;
  courses = [{ id: 1, name: 'exe 1' }, { id: 2, name: 'exe 2' }, { id: 3, name: 'exe 3' }];

  constructor(private route: ActivatedRoute, private router: Router,
    private service: CodeService, private fb: FormBuilder, ) { }

  ngOnInit() {
    this.createForm();
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id !== 0) {
      this.service.getOne(this.id).subscribe(r => {
        this.o = r as Code;
        console.log(this.o);
        this.createForm();
      });
    }
  }

  createForm() {
    this.myForm = this.fb.group({
      id: this.o.id,
      name: [this.o.name, Validators.required],
      code: [this.o.code, Validators.required],
      courseId: [this.o.courseId, [Validators.email, Validators.required]],
      date: [this.o.date, Validators.required],
    });
  }

  submit(o: Code) {
    if (this.id === 0) {
      this.service.post(o).subscribe(r => {
        this.router.navigateByUrl('/admin/user');
      });
    } else {
      this.service.put(o.id, o).subscribe(r => {
        this.router.navigateByUrl('/admin/user');
      });
    }
  }
}
