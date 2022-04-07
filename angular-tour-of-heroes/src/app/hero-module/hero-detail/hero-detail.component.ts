import { HeroService } from './../../hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit {
  nameControl: FormControl = new FormControl;
 
  isActive = false;

  @Input() hero?: Hero;
  

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.heroService.getHero(id, name)
      .subscribe(hero => this.hero = hero);    
  }

  goBack(): void{
    this.location.back();
  }
  
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
  

}
