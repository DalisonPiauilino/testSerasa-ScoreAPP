import { Injectable, NgModule } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()

export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ){}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
      body: req.body,
      setHeaders: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

    next.handle(req).pipe(catchError(err => {
        this.router.navigate(['error']);
        return throwError(err);
    }));
    return next.handle(dupReq);
  }
}
