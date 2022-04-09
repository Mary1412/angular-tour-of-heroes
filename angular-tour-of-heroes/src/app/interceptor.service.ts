import { HeroService } from './hero.service';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor( public heroService: HeroService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.heroService.isLoading.next(true);

    return next.handle(req).pipe(
      finalize(
        ()=>{
          this.heroService.isLoading.next(false);
        }
      )
    )
  }
}
