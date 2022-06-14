import { User } from './users/user';
import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Post } from './post/post';
import { Com } from './post/Com';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private postsUrl = 'http://jsonplaceholder.typicode.com/posts';
  data=new Date();
  public isLoading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(true);
  posts2: string[] =[];
  


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

  getPosts(): Observable<Post[]> {
    this.data=new Date();
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        tap(_ => this.log('fetched posts')),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }

  getPost(id: number, title: string, body: string): Observable<Post> {
   //s const url22='http://localhost:3000/users/1/';
    const url = `http://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => this.log(`fetched title id=${id} title=${title} body=${body} `)),
      catchError(this.handleError<Post>(`getPost id=${id} title=${title} body=${body} `))
    );
  }

  geComments(): Observable<Com[]> {
    this.data=new Date();
    const url = 'http://jsonplaceholder.typicode.com/comments';
    return this.http.get<Com[]>(url)
      .pipe(
        tap(_ => this.log('fetched comments')),
        catchError(this.handleError<Com[]>('getComments', []))
      );
  }

  searchPosts(term: string): Observable<Post[]> {
    if (!term.trim()) {
      return of([]);
    }
    this.data=new Date();
    return this.http.get<Post[]>(`http://jsonplaceholder.typicode.com/posts/?title=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found post matching "${term}"`) :
         this.log(`no post matching "${term} "`)),
      catchError(this.handleError<Post[]>('searchPosts', []))
    );
  }


  addPost(post: Post): Observable<Post> {
    this.data=new Date();
    return this.http.post<Post>(this.postsUrl, post, this.httpOptions).pipe(
      tap((newPost: Post) => this.log(`added posts  id=${newPost.id} title=${newPost.title} `)),
      catchError(this.handleError<Post>('addPost'))
    );
  }

  deletePost(id: number, title:string): Observable<Post> {
    this.data=new Date();
    //const url = `${this.usersUrl}/${id}`;
    const url = `http://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.delete<Post>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted post id=${id} title=${title} `)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }




  updatePost(id: number,post: Post): Observable<any> {
    const url = `http://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.put<Post>(url, post, this.httpOptions).pipe(
      tap(_ => this.log(`updated post userId=${post.userId} id=${post.id} title=${post.title} body=${post.body}  `)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

  
 

 

  

  
}
