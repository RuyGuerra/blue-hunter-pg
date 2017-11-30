import { Component, OnInit, EventEmitter, Output, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  @Input() title: string;
  @Input() options: any[] = [];
  @Output() search = new EventEmitter();
  value: string;
  selOption = 'by-title';

  constructor() { }

  ngOnInit() {
    // this.selOption = this.options[0].value;
    // console.log('>>>>>>>>', this.options[0]);
  }

  // ngAfterViewInit() {
  //   console.log(this.seloptions);
  // }

  onClick() {
    // console.log('====>', this.value);
    this.search.emit(this.value);
  }

  onEnterKey() {
    // console.log('====>', this.value);
    this.search.emit(this.value);
  }

  // onChange() {
  //   console.log('>>>>', this.seloptions);
  // }

  // onClickChip(event) {
  //   this.selOption = event.target.innerText;
  //   // console.log(event.target.innerText);
  // }

}

