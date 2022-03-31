
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
import { AddDComponent } from '../add-d/add-d.component';
import { DeleteDComponent } from '../delete-d/delete-d.component';




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

    this.heroes2$ = this.searchTerms2.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.addSearchHeroes(term)),
      );
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

  let dr=this.dialog.open(AddDComponent);
    dr.afterClosed().subscribe(result => {
      if(result) {
this.heroService.addHero2({ name } as Hero)
    .subscribe(hero => {
      if(name2 == hero.name){
                this.heroes.push(hero);
      }
      
    });
    
  }
 
});

}






delete(hero: Hero): void {
  let dr2=this.dialog.open(DeleteDComponent);
  dr2.afterClosed().subscribe(result => {
    if(result) {
       
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero.id,hero.name).subscribe();
    }
  })
 
}

}
