import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[]=[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.nameControl = new FormControl(' ');
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  nameControl: FormControl = new FormControl;
  isActive = false;

  data=new Date();
  changeData(){
    this.data=new Date();
  }



}
