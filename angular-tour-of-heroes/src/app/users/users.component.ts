import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { USERS } from '../mock-users';
import { User } from './user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  [x: string]: any;

  //users = USERS;
  nameControl: FormControl = new FormControl;
  users: User[]=[];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  
  getUsers(): void{
  this.userService.getUsers()
    .subscribe(users => this.users = users);
}


  add(name: string, surname: string): void {
    name = name.trim();
    surname = surname.trim();
    if (!name || !surname) { return; }
    this.userService.addUser({ name, surname } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }


}
