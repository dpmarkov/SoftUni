import { Inject, Injectable } from '@angular/core';
import { myStringInjectionToken, myStringInjectionToken2 } from './app.module';
import { Iuser } from './interfaces/user';

@Injectable()

export class UserService {

  users: Iuser[] = [
    {
      name: 'Peter',
      age: 22
    },
    {
      name: 'Ivan',
      age: 18
    },
    {
      name: 'Michael',
      age: 31
    }
  ];

  constructor(
    @Inject(myStringInjectionToken) myString: string, @Inject(myStringInjectionToken2) myString2: string) { 
    console.log(myString);
    console.log(myString2);
  }

  addNewUserHandler(newUser: Iuser): void {
    this.users = this.users.concat(newUser);
  }
}
