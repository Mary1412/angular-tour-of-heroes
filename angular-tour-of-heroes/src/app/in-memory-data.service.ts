import { User } from './users/user';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes = [
      { id: 11, name: ' ' },
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
    const users = [
      { id: 1, name: 'User1', surname:'U1' },
      { id: 2, name: 'User2', surname:'U2' },
      { id: 3, name: 'User3', surname:'U3' },
      { id: 4, name: 'User4', surname:'U4' },
      { id: 5, name: 'User5', surname:'U5' },
      { id: 6, name: 'User6', surname:'U6' },
      { id: 7, name: 'User7', surname:'U7' },
      { id: 8, name: 'User8', surname:'U8' },
      { id: 9, name: 'User9', surname:'U9' },
      { id: 10, name: 'User10', surname:'U10' }
    ];
    return {heroes, users};
  }

  

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+1:11;
  }

  getId2(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user=> user.id))+1:11;
  }

  

  constructor() { }
}
