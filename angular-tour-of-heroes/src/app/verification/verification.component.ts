import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  isActive = true;
 
  constructor() { }

  ngOnInit(): void {
  }

  verControl=new FormGroup({
    loginFormControl : new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]),
    swFormControl : new FormControl('', [Validators.required])
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
    this.r=1
    this.rr.emit(this.r);
    this.v=0
    this.vv.emit(this.v);
  }


}
