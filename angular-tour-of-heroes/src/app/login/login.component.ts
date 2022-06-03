import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isActive = true;
  l1:string='';
  


 

  logControl=new FormGroup({
  loginFormControl : new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]),
  pas1FormControl : new FormControl('', [Validators.required])
})





login1:string='';


  l=0;
  s=0;
  r=0;
  v=0;

  @Output() ll=new EventEmitter();
  @Output() ss=new EventEmitter();
  @Output() rr=new EventEmitter();
  @Output() vv=new EventEmitter();
  

  movep(){
    this.l=0;
    this.ll.emit(this.l);
    this.s=1
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

 
  constructor() { }

  ngOnInit(): void {
    const jsonData = JSON.stringify(this.login)
    localStorage.setItem('login', '')
    localStorage.setItem('sw', '')
    localStorage.setItem('passw1', '')
    localStorage.setItem('passw2', '')
    localStorage.setItem('login1', '')
  }

  login(){
    this.login1=(<HTMLInputElement>document.getElementById('l1')).value;
    
    const jsonData5 = JSON.stringify(this.login1)
    localStorage.setItem('login1', jsonData5)
    
    
  }

}
