import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { from, Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Hero } from './hero-module/heroes/hero';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

 // private heroesUrl = 'api/heroes11';
 private heroesUrl = 'http://localhost:3000/heroes';

  data=new Date();
  public isLoading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(true);
  
  


  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }
    private log(message: string) {
      this.data=new Date();
      this.messageService.add(`HeroService: ${message} ${this.data} `  );
    }

    getData():Observable<any>{


      return this.http.get<any>(this.heroesUrl)

    }
   



    getHeroes(): Observable<Hero[]> {
      this.data=new Date();
      return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
          tap(_ => this.log('fetched heroes')),
          catchError(this.handleError<Hero[]>('getHeroes', []))
        );
    }

    getHero(id: number, name: string): Observable<Hero> {
      //const url = `${this.heroesUrl}/${id}`;
      const url = `http://localhost:3000/heroes/${id}`;
      return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id} name=${name}  `)),
        catchError(this.handleError<Hero>(`getHero id=${id} name=${name} `))
      );
    }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id} name=${hero.name} `)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };




 
  
  getHeroes2(): Observable<Hero[]> {
    this.data=new Date();
    return this.http.get<Hero[]>(this.heroesUrl)
      
  }

 

  

  deleteHero(id: number, name:string): Observable<Hero> {
    this.data=new Date();
   // const url = `${this.heroesUrl}/${id}`;
   const url = `http://localhost:3000/heroes/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id} name=${name} `)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    this.data=new Date();
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero  id=${newHero.id} name=${newHero.name} `)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    const url = `http://localhost:3000/heroes/?name=${term}`;
    this.data=new Date();
    return this.http.get<Hero[]>(url).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term} "`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }




  addHero2(hero: Hero): Observable<Hero> {

      
    this.data=new Date();
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero  id=${newHero.id} name=${newHero.name} `)),
      catchError(this.handleError<Hero>('addHero'))
    );
       
    
  }



 
  



  
}


export class ParamsModel {
  private params:any = [];

  constructor() {}

  public setParams(param: any) {
      this.params.push(param);
  }

  public getParams() {
      return this.params;
  }
}