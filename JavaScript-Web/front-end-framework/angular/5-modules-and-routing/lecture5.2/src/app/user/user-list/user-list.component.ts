import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: IUser[] | undefined;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(search?: string): void {
    this.userService.loadUsers(search).subscribe(users => this.users = users);
  }

  reloadButtonHandler(): void {
    this.users = undefined;
    this.loadUsers();
  }

  searchButtonHandler(searchInput: HTMLInputElement): void {
    const { value } = searchInput;
    this.loadUsers(value);
  }
}
