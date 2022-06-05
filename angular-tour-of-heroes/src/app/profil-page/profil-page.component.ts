import { User } from '../users/user';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profil',
  templateUrl: './profil-page.component.html',
  //styleUrls: ['./profil-page.component.css']
})
export class ProfilPageComponent implements OnInit {

  nameControl: FormControl = new FormControl;
  nameControl2: FormControl = new FormControl;

 
  isActive = false;

  @Input() user?: User;
  

  l1:string='';
  
login1:string='';
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.l1=String(localStorage.getItem('login1')).split('"').join('');
    
  }

  s=0;
  setting(){
    this.s=1;

  }

  getUser(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const name = String(this.route.snapshot.paramMap.get('name'));
    const surname = String(this.route.snapshot.paramMap.get('surname'));
    this.userService.getUser(id, name, surname)
      .subscribe(user => this.user = user);    
  }

  goBack(): void{
    this.location.back();
    
  }
  
  save(): void {
    if (this.user) {
      this.userService.updateUser(this.user.id,this.user)
        .subscribe();
    }
    this.s=0;
  }





  url: any="https://i.pinimg.com/originals/ba/66/02/ba6602a51ea3490764cb1e03ea28fae8.jpg"; 
	msg = "";
  
	

	selectFile(event: any) { 
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			
      return;
      
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
      const jsonData5 = JSON.stringify(this.url)
      localStorage.setItem('url', jsonData5)
		}
	}





}
