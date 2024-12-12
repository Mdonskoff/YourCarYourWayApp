import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import {HeaderComponent} from '../../core/header/header.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SupportRoutingModule,
    HeaderComponent
  ]
})
export class SupportModule { }
