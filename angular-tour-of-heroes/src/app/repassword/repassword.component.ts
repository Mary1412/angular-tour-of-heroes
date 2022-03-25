import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-repassword',
  templateUrl: './repassword.component.html',
  styleUrls: ['./repassword.component.css']
})
export class RepasswordComponent implements OnInit {
  pas1FormControl = new FormControl('', [Validators.required]);
  pas2FormControl = new FormControl('', [Validators.required]);
  isActive = true;
  constructor() { }

  ngOnInit(): void {
  }

}
