import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  isActive = true;

  log:string='';
  secret:string='';
 
 

  constructor() { }

  ngOnInit(): void {
    this.log=String(localStorage.getItem('login')).split('"').join('');
    this.secret=String(localStorage.getItem('sw')).split('"').join('');
  
     
  }

  verControl=new FormGroup({
    loginFormControl : new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]),
    swFormControl : new FormControl('', [Validators.required])
  })


  login:string='';
  sw:string='';
  l=0;
  s=0;
  r=0;
  v=0;

  @Output() ll=new EventEmitter();
  @Output() ss=new EventEmitter();
  @Output() rr=new EventEmitter();
  @Output() vv=new EventEmitter();

/* qq(){
  this.login=(<HTMLInputElement>document.getElementById('log')).value;
     console.log(this.login);

    
     }

     qq2(){
      this.login=(<HTMLInputElement>document.getElementById('log')).value;
         console.log(this.login);
    
        
    
         this.mm=String(localStorage.getItem('login')).split('"').join('');
         
         console.log(this.mm);
         }*/


  

  movep(){
    const jsonData = JSON.stringify(this.login)
    localStorage.setItem('login', jsonData)

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
    this.login=(<HTMLInputElement>document.getElementById('log')).value;
    this.sw=(<HTMLInputElement>document.getElementById('sw')).value;
    const jsonData = JSON.stringify(this.login)
    localStorage.setItem('login', jsonData)
    const jsonData1 = JSON.stringify(this.sw)
    localStorage.setItem('sw', jsonData1)

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
