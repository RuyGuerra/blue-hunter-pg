import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpErrorResponse, HttpEvent, HttpRequest, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/do';

import { IAppConfig, APP_CONFIG } from '../config/app.config';

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {

    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig
      ) {

      }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).timeout(this.config.httpTimeout).do(event => { }, err => { // timeout of 4000 ms
            if (err instanceof HttpErrorResponse) {
                console.log('Error Caught By Timeout Interceptor');
                // Observable.throw(err);
            }
        });
    }
}
