import { NewservService } from './newserv.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of heroes';
  nameControl: FormControl = new FormControl;
  isActive = false;



constructor(private newservService: NewservService){}
  

  data=new Date();
  changeData(){
    this.data=new Date();
  }


  gdfa(){
    this.newservService.getData().subscribe((data: any)=>{
      console.log(data);
      
    })
   /* fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));*/
  

  }


  ngOnInit(){
    this.nameControl = new FormControl(' ');
  }

  
}
