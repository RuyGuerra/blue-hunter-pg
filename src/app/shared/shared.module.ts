import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { StarsComponent } from './stars/stars.component';
import { AlertComponent } from './alert/alert.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    SearchBarComponent,
    FormsModule,
    StarsComponent
  ],
  declarations: [
    SearchBarComponent,
    StarsComponent,
    AlertComponent,
    NotFoundComponent
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class SharedModule { }
