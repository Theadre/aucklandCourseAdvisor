import { SuperRepository } from './super.repository';
import { Programme } from '../model/models';

export class ProgrammeRepository extends SuperRepository<Programme> {

  constructor() {
    super(Programme);
  }
}
