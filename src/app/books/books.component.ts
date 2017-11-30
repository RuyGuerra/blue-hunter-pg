import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { IBook } from '../models/book';
import { BookService } from '../core/services/book.service';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';
import { AlertComponent } from '../shared/alert/alert.component';
import { ServiceError } from '../models/service-error';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {
  title = 'Books';
  displayedColumns = ['id', 'title', 'author', 'yearPublished', 'price', 'rating'];
  dataSource: any;
  options = [
    {
      'viewValue': 'by Title',
      'value': 'by-title'
    },
    {
      'viewValue': 'by Author',
      'value': 'by-author'
    }
  ];
  @ViewChild('sbar') seloptions: SearchBarComponent;

  constructor(
    private bookService: BookService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
  }

  onSearch(event) {
    this.bookService.getBooksBy(event, this.seloptions.selOption)
      .subscribe((users: IBook[]) => {
        if (users.length === 0) {
          this.openAlert('Sorry no results found. Please modify your search criteria and try again.');
        }
        this.dataSource = new BooksDataSource(
          users.map((x) => {
            x.rating = x.rating.replace('/5', '');
            return x;
          })
        );
      },
      (err) => {
        this.openAlert(err.friendlyMessage);
        console.log(err);
      });
  }

  openAlert(msg: string): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '600px',
      data: { message: msg }
    });
  }

}

export class BooksDataSource extends DataSource<any> {
  constructor(private _books: IBook[]) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IBook[]> {
    return Observable.of(this._books);
  }

  disconnect() { }
}


