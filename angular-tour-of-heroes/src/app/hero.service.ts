import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    this.MessageService.add('HeroService: fetched heroes');
    const heroes = of(HEROES);
    return heroes;
  }

  constructor(private MessageService: MessageService) { }
}
