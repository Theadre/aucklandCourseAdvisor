import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DatabaseService } from '../../shared/database.service';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesPageRoutingModule } from './courses-page.routing';

@NgModule({
  declarations: [CoursesPageComponent],
  imports: [CommonModule, CoursesPageRoutingModule, MatTableModule, MatButtonModule, MatTooltipModule, MatIconModule],
  providers: [DatabaseService],
  exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
