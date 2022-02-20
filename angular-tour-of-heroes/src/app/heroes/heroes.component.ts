import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]=[];

selectedHero?: Hero;

  constructor( private heroService: HeroService, private MessageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
/*
  hero: Hero = {
    id:1,
    name: 'Windstorm'
  };
*/


onSelect(hero: Hero): void {
  this.selectedHero=hero;
  this.MessageService.add(`HeroComponent: Selected hero id=${hero.id}`);
  this.MessageService.add(`HeroComponent: Selected hero whith name=${hero.name}`);
}

getHeroes(): void{
  this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
}



}
