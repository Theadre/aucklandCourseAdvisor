import { SuperRepository } from './super.repository';
import { StudentProgramme } from '../model/models';

export class StudentProgrammeRepository extends SuperRepository<StudentProgramme> {

  constructor() {
    super(StudentProgramme);
  }
}
