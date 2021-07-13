import { Component } from '@angular/core';
import { Iuser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lecture2';
  paramA = 'testing';
  count: number = 0;
  showText = true;
  
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

  constructor() {
    debugger;
  }
  ngOnInit(): void {
    debugger;
  }

  buttonClickHandler(): void {
    this.count++;
    console.log(`Button was clicked ${this.count} times!`);
  }

  toggleHandler(): void {
    this.showText = !this.showText;
  }

  changeTitle(input: HTMLInputElement): void {
    this.title = input.value;
    input.value = '';
  }

  addNewUserHandler(newUser: Iuser): void {
    this.users.push(newUser);
  }
}
