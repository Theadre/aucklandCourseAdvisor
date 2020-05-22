import { SuperRepository } from './super.repository';
import { CourseCode } from '../model/models';

export class CourseCodeRepository extends SuperRepository<CourseCode> {

  constructor() {
    super(CourseCode);
  }
}
