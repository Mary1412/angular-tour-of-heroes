import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-repassword',
  templateUrl: './repassword.component.html',
  styleUrls: ['./repassword.component.css']
})
export class RepasswordComponent implements OnInit {
 
  isActive = true;
  constructor() { }

  ngOnInit(): void {
  }




  reControl=new FormGroup({
    pas1FormControl : new FormControl('', [Validators.required]),
  pas2FormControl : new FormControl('', [Validators.required])
  })



  
  l=0;
  s=0;
  r=0;
  v=0;

  @Output() ll=new EventEmitter();
  @Output() ss=new EventEmitter();
  @Output() rr=new EventEmitter();
  @Output() vv=new EventEmitter();
  

  movep(){
    this.l=1;
    this.ll.emit(this.l);
    this.s=0
    this.ss.emit(this.s);
    this.r=0
    this.rr.emit(this.r);
    this.v=0
    this.vv.emit(this.v);
  }


  movep2(){
    this.l=0;
    this.ll.emit(this.l);
    this.s=0
    this.ss.emit(this.s);
    this.r=0
    this.rr.emit(this.r);
    this.v=1
    this.vv.emit(this.v);
  }

}
