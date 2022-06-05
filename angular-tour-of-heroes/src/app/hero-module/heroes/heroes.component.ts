
'use strict';

import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';


import { HEROES } from './.././../mock-heroes';
import { MessageService } from './.././../message.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './../../hero.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';



import { DialogForAddingComponent } from './../../dialog-for-adding/dialog-for-adding.component';
import { DialogForDeletingComponent } from './../../dialog-for-deleting/dialog-for-deleting.component';
import { DialogForExistingComponent } from './../../dialog-for-existing/dialog-for-existing.component';


import {sep} from '../../globals'; 
import { GlobVarService } from 'src/app/glob-var.service';





@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})



export class HeroesComponent implements OnInit {
  
  nameControl: FormControl = new FormControl;
  isActive = false;
  heroes: Hero[]=[];
  searchTerms: any;
  heroes2$!: Observable<Hero[]>;


  public searchTerms2 = new Subject<string>();
  
  l1:string='';
  
  login1:string='';
  url:any="";

 


  constructor( private heroService: HeroService, private MessageService: MessageService, public dialog: MatDialog,
    private globVarService:GlobVarService) { }

  
  
  ngOnInit(): void {
    this.getHeroes();
    this.nameControl = new FormControl(' ');
    this.l1=String(localStorage.getItem('login1')).split('"').join('');
    this.url=String(localStorage.getItem('url')).split('"').join('');
  }

 public helloString: string= "";

  readValue() {
    this.helloString = this.globVarService.globalVar;
   
  }
 

ch:number=0;
o:number=1;

addO(){
this.o=0
}

  nv:string="";

  show(){
this.ch=1;
  }

  closseE(){
    this.ch=0;
  }


  edit( g:string):void{
    //let dr3=this.dialog.open(HeroDetailComponent);
    this.nv=g;
  }

 


getHeroes(): void{
  this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
}

search2(name: string): void {
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
                this.heroes.push(hero);
      
      
    });
}

add(name: string): void {
  this.o=1;

let name2 = name;

let b =4;
for( let i=0; i<this.heroes.length; i++){
 if (this.heroes[i].name==name ){
    b=2;
    break;
  }
  else if(name==""){
    b=4;
  }
  else{
    b=3;
  }
 
}

if (b==3 ){
  let dr=this.dialog.open(DialogForAddingComponent);
    dr.afterClosed().subscribe(result => {
      if(result) {
      
this.heroService.addHero2({ name } as Hero)
    .subscribe(hero => {
      if(name == hero.name){
                this.heroes.push(hero);
      }
      
    });
    
  }
 
});
}
else if (b==2){
 
  let dr2=this.dialog.open(DialogForExistingComponent);
}

}







delete(hero: Hero): void {
  let dr2=this.dialog.open(DialogForDeletingComponent);
  dr2.afterClosed().subscribe(result => {
    if(result) {
       
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero.id,hero.name).subscribe();
    }
  })
 
}





}
