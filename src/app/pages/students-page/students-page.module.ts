import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';


import { DatabaseService } from '../../shared/database.service';
import { StudentsPageComponent } from './students-page.component';
import { StudentsPageRoutingModule } from './students-page.routing';

@NgModule({
  declarations: [StudentsPageComponent],
  imports: [CommonModule, StudentsPageRoutingModule, MatButtonModule, MatIconModule, MatTableModule, MatTooltipModule],
  providers: [DatabaseService],
  exports: [StudentsPageComponent],
})
export class StudentsPageModule {}
