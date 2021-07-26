import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  {

  constructor(private userService: UserService) { }

  get firstName(): string {
    return this.userService.user?.firstName || '';
  }

  get email(): string {
    return this.userService.user?.email || '';
  }
}
