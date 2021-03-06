//import { InMemoryDataService } from './../in-memory-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { USERS } from '../mock-users';
import { User } from './user';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogForAddingComponent } from '../dialog-for-adding/dialog-for-adding.component';

import { DialogForDeletingComponent } from '../dialog-for-deleting/dialog-for-deleting.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  [x: string]: any;
  isActive = false;

  //users = USERS;
  nameControl: FormControl = new FormControl;
  users: User[]=[];
  
  l1:string='';
  
login1:string='';
url:any="";


  constructor(private userService: UserService , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
    this.l1=String(localStorage.getItem('login1')).split('"').join('');
    this.url=String(localStorage.getItem('url')).split('"').join('');
  }

  
  getUsers(): void{
  this.userService.getUsers()
    .subscribe(users => this.users = users);
}





  add(name: string, surname: string): void {
    let dr=this.dialog.open(DialogForAddingComponent);

    dr.afterClosed().subscribe(result => {
      if(result) {
        name = name.trim();
        surname = surname.trim();
        if (!name || !surname) { return; }
        this.userService.addUser({ name, surname } as User)
          .subscribe(user => {
            this.users.push(user);
          });
    
      }
     
    });
  
  }

  delete(user: User): void {
    let dr2=this.dialog.open( DialogForDeletingComponent );
  dr2.afterClosed().subscribe(result => {
    if(result) {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user.id,user.name, user.surname).subscribe();
  }
})

}

}
