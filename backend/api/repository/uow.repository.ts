import { UserRepository } from './user.repository';

export class UowRepository {

  users = new UserRepository();

  constructor() { }

}
