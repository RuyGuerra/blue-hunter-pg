import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    BooksComponent
  ]
})
export class BooksModule { }

