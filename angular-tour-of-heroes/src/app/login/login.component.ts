import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isActive = true;
  login = "";
  loginFormControl = new FormControl('', [Validators.required, Validators.pattern('^[а-яА-ЯёЁa-zA-Z0-9]+$')]);
  pas1FormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
    
  }

}
