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

  data=new Date();
  changeData(){
    this.data=new Date();
  }

  ngOnInit(): void {
    this.nameControl = new FormControl(' ');
  }

}
