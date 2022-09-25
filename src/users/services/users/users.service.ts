import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Cuca', email: 'cuca@gmail.com' },
    { username: 'lulu', email: 'lulu@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserById(id: number) {
    return { id, username: 'anson', email: 'chupa@gmail.com' };
  }
}
