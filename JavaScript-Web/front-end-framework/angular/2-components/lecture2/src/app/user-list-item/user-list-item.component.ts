import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from '../interfaces/user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input() user: Iuser | undefined; 

  constructor() { }

  ngOnInit(): void {
  }

}
