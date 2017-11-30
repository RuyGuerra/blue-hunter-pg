import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule { }
