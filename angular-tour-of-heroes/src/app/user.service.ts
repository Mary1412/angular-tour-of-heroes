import { User } from './users/user';
import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private usersUrl = 'api/users';
  data=new Date();
  
  


  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }
    private log(message: string) {
      this.data=new Date();
      this.messageService.add(`HeroService: ${message} ${this.data} `  );
    }
   

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUsers(): Observable<User[]> {
    this.data=new Date();
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  getUser(id: number, name: string, surname:string): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id} name=${name} surname=${surname}  `)),
      catchError(this.handleError<User>(`getUser id=${id} name=${name} surname=${surname} `))
    );
  }


  addUser(user: User): Observable<User> {
    this.data=new Date();
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added users  id=${newUser.id} name=${newUser.name}  name=${newUser.surname}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }


  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.id} name=${user.name}  name=${user.surname} `)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(id: number, name:string, surname:string): Observable<User> {
    this.data=new Date();
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${id} name=${name} surname=${surname} `)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }
 

 

  

  
}
