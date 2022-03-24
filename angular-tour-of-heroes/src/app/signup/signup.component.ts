import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]);
  surnameFormControl = new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]);
  loginFormControl = new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

}
