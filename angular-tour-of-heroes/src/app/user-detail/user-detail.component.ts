import { User } from './../users/user';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  nameControl: FormControl = new FormControl;
  nameControl2: FormControl = new FormControl;
 
  isActive = false;
  l1:string='';
  
login1:string='';

  @Input() user?: User;
  url:any="";
  

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.l1=String(localStorage.getItem('login1')).split('"').join('');
    this.url=String(localStorage.getItem('url')).split('"').join('');
  }

  s=0;
  setting(){
    this.s=1;

  }

  getUser(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const name = String(this.route.snapshot.paramMap.get('name'));
    const surname = String(this.route.snapshot.paramMap.get('surname'));
    this.userService.getUser(id, name, surname)
      .subscribe(user => this.user = user);    
  }

  goBack(): void{
    this.location.back();
    
  }
  
  save(): void {
    if (this.user) {
      this.userService.updateUser(this.user.id,this.user)
        .subscribe();
    }
    this.s=0;
  }

}
