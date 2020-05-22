import { SuperRepository } from './super.repository';
import { User } from '../model/models';

export class UserRepository extends SuperRepository<User> {

  constructor() {
    super(User);
  }

}
