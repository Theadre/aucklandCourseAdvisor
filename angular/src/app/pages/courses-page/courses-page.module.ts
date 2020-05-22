import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { DatabaseService } from '../../shared/database.service';
import { CoursesPageComponent } from './courses-page.component';
import { CoursesPageRoutingModule } from './courses-page.routing';
import { CodeEditorPageComponent } from './subpages/code-editor-page/code-editor-page.component';
import { PrerequisiteEditorPageComponent } from './subpages/prerequisite-editor-page/prerequisite-editor-page.component';

@NgModule({
  declarations: [CoursesPageComponent, CodeEditorPageComponent, PrerequisiteEditorPageComponent],
  imports: [CommonModule, CoursesPageRoutingModule, MatTableModule, MatButtonModule, MatTooltipModule, MatIconModule],
  providers: [DatabaseService],
  exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
