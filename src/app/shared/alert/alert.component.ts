import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent implements OnInit {
  message: string;

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.message = this.data.message;
  }

}
