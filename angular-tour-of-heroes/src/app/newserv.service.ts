import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewservService {

  constructor(private http: HttpClient) { }

  private url ='http://jsonplaceholder.typicode.com/posts';

  getData():Observable<any>{
    this.http.get<any>(this.url).subscribe(t =>{
      console.log(t, 'ZZZZZ');
    })
   return this.http.get<any>(this.url)


  }

  
}
