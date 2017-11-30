import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.less']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input() rating: number;
  starWidth: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 16 + 2;
}

}
