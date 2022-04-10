import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isActive = true;
  constructor() { }

  
 


    signupControl=new FormGroup({
     
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
  nameFormControl : new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]),
  surnameFormControl : new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]),
  loginFormControl : new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]),
  pas1FormControl : new FormControl('', [Validators.required]),
  pas2FormControl : new FormControl('', [Validators.required]),
  butFormControl : new FormControl('', [Validators.required])
  })


 
  
  







  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

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


}
