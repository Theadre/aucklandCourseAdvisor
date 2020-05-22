import { SuperRepository } from './super.repository';
import { Course } from '../model/models';

export class CourseRepository extends SuperRepository<Course> {

  constructor() {
    super(Course);
  }
}
