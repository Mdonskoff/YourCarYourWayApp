import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SupportChatComponent} from './support-chat/support-chat.component';

const routes: Routes = [
  {
    title: 'support-chat', path: '', component: SupportChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
