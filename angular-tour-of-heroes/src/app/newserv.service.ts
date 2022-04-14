import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewservService {

  constructor(private http: HttpClient) { }

  private url ='http://localhost:3000/heroes';

  getData():Observable<any>{

    

    return this.http.get<any>(this.url)


  }

  
}
