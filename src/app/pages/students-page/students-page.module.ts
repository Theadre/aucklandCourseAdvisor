import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StudentsPageComponent } from './students-page.component';
import { StudentsPageRoutingModule } from './students-page.routing';

@NgModule({
  declarations: [StudentsPageComponent],
  imports: [CommonModule, StudentsPageRoutingModule],
  exports: [StudentsPageComponent],
})
export class StudentsPageModule {}
