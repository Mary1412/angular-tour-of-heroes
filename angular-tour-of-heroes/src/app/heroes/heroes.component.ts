
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './../in-memory-data.service';

import { HEROES } from './../mock-heroes';
import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';



import { DialogForAddingComponent } from '../dialog-for-adding/dialog-for-adding.component';
import { DialogForDeletingComponent } from '../dialog-for-deleting/dialog-for-deleting.component';
import { DialogForExistingComponent } from '../dialog-for-existing/dialog-for-existing.component';




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
  
  



  constructor( private heroService: HeroService, private MessageService: MessageService, public dialog: MatDialog) { }

  
  
  ngOnInit(): void {
    this.getHeroes();
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
