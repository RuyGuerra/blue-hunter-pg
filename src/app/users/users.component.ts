import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { IUser } from '../models/user';
import { UserService } from '../core/services/user.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { ServiceError } from '../models/service-error';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  displayedColumns = ['id', 'fullName', 'gender', 'age', 'email', 'phone', 'username'];
  dataSource;

  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  onSearch(event) {
    this.userService.getUsersByName(event)
      .subscribe((users: IUser[]) => {
        if (users.length === 0) {
          this.openAlert('Sorry no results found. Please modify your search criteria and try again.');
        }
        this.dataSource = new UsersDataSource(users);
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

export class UsersDataSource extends DataSource<any> {
  constructor(private _users: IUser[]) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IUser[]> {
    return Observable.of(this._users);
  }

  disconnect() { }
}


