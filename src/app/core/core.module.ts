import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { AppConfig, APP_CONFIG } from '../config/app.config';
import { TimeoutInterceptor } from '../shared/timeout.interceptor';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    BrowserAnimationsModule,
    ToolbarComponent
  ],
  declarations: [
    ToolbarComponent
  ],
  providers: [
    UserService,
    BookService,
    { provide: APP_CONFIG, useValue: AppConfig},
    { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
