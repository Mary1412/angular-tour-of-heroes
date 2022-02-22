import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes = [
      { id: 11, name: 'H1' },
      { id: 12, name: 'H2' },
      { id: 13, name: 'H3' },
      { id: 14, name: 'H4' },
      { id: 15, name: 'H5' },
      { id: 16, name: 'H6' },
      { id: 17, name: 'H7' },
      { id: 18, name: 'H8' },
      { id: 19, name: 'H9' },
      { id: 20, name: 'H10' }
    ];
    return {heroes};
  }

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+1:11;
  }

  constructor() { }
}
