import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iuser } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() userArray: Iuser[] = [];
  @Output() addUser = new EventEmitter<Iuser>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement): void {
    const { value: name } = userNameInput;
    const { valueAsNumber: age } = userAgeInput;

    this.addUser.emit({ name, age })
    userNameInput.value = '';
    userAgeInput.value = '';
  }
}
