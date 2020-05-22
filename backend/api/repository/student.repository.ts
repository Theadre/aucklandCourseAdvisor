import { SuperRepository } from './super.repository';
import { Student } from '../model/models';

export class StudentRepository extends SuperRepository<Student> {

  constructor() {
    super(Student);
  }
}
