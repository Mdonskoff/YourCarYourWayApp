import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {ChatComponent} from './chat/chat.component';
import {HeaderComponent} from '../../core/header/header.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HeaderComponent,
  ]
})
export class UsersModule { }
