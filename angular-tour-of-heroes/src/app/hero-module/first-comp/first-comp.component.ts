import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  constructor() { }
  nameControl: FormControl = new FormControl;
  isActive = false;

  l1:string='';
  
login1:string='';
url:any=""

  data=new Date();
  changeData(){
    this.data=new Date();
  }

  ngOnInit(): void {
    this.nameControl = new FormControl(' ');
    this.l1=String(localStorage.getItem('login1')).split('"').join('');
    this.url=String(localStorage.getItem('url')).split('"').join('');

  }



}
