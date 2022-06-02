import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-repassword',
  templateUrl: './repassword.component.html',
  styleUrls: ['./repassword.component.css']
})
export class RepasswordComponent implements OnInit {
 
  isActive = true;
  constructor() { }

  p1:string='';
  p2:string='';

  ngOnInit(): void {
    this.p1=String(localStorage.getItem('passw1')).split('"').join('');
    this.p2=String(localStorage.getItem('passw2')).split('"').join('');
  }





  reControl=new FormGroup({
    pas1FormControl : new FormControl('', [Validators.required]),
  pas2FormControl : new FormControl('', [Validators.required])
  })



passw1:string='';
passw2:string='';
  
  l=0;
  s=0;
  r=0;
  v=0;

  @Output() ll=new EventEmitter();
  @Output() ss=new EventEmitter();
  @Output() rr=new EventEmitter();
  @Output() vv=new EventEmitter();
  

  movep(){
    this.passw1=(<HTMLInputElement>document.getElementById('p1')).value;
    this.passw2=(<HTMLInputElement>document.getElementById('p2')).value;
    const jsonData3 = JSON.stringify(this.passw1)
    localStorage.setItem('passw1', jsonData3)
    const jsonData4 = JSON.stringify(this.passw2)
    localStorage.setItem('passw2', jsonData4)


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

    this.passw1=(<HTMLInputElement>document.getElementById('p1')).value;
    this.passw2=(<HTMLInputElement>document.getElementById('p2')).value;
    const jsonData5 = JSON.stringify(this.passw1)
    localStorage.setItem('passw1', jsonData5)
    const jsonData6 = JSON.stringify(this.passw2)
    localStorage.setItem('passw2', jsonData6)
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
