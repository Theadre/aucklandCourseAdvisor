import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';


import { DatabaseService } from '../../shared/database.service';
import { ProgrammesPageComponent } from './programmes-page.component';
import { ProgrammesPageRoutingModule } from './programmes-page.routing';

@NgModule({
  declarations: [ProgrammesPageComponent],
  imports: [CommonModule, ProgrammesPageRoutingModule, MatButtonModule, MatIconModule, MatTableModule, MatTooltipModule],
  providers: [DatabaseService],
  exports: [ProgrammesPageComponent],
})
export class ProgrammesPageModule {}
