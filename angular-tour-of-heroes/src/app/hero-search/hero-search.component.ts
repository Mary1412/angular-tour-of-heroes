import { Hero } from './../heroes/hero';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  nameControl: FormControl = new FormControl;
  isActive = false;

  
  public searchTerms = new Subject<string>();

  constructor(public heroService: HeroService) { }

  heroes$!: Observable<Hero[]>;
  

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }


  search(term: string): void {
    this.searchTerms.next(term);
  }

}
