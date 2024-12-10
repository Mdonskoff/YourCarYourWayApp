import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {ChatComponent} from './chat/chat.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
