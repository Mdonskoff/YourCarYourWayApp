import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MessageInterface} from '../../interface/message.interface';
import {ChatServiceService} from '../../service/chat-service.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {Subscription} from 'rxjs';
import {HeaderComponent} from '../../../core/header/header.component';

@Component({
  selector: 'app-support-chat',
  imports: [
    DatePipe,
    NgForOf,
    NgIf,
    HeaderComponent
  ],
  templateUrl: './support-chat.component.html',
  standalone: true,
  styleUrl: './support-chat.component.scss'
})
export class SupportChatComponent implements OnInit, OnDestroy {
  listMessage: MessageInterface [] = []
  messageSubscription!: Subscription;

  @ViewChild("content") content: ElementRef<HTMLInputElement> | undefined

  constructor(private chatService: ChatServiceService) {
  }
  ngOnInit() : void {
    this.listenMessage()
  }

  sendMessage(content: string): void {
    let message : MessageInterface = { id: 0, message: content, date : new Date() }
    this.content!.nativeElement.value = "" //remet l'élément à vide une fois le msg send
    this.chatService.send(message)
  }
  listenMessage(): void {
    this.messageSubscription = this.chatService.getCurentContent().subscribe((messages: Array<MessageInterface>) => {
      this.listMessage = messages.map((message: MessageInterface) => ({
        ...message
      }))
    })
    this.chatService.listen()
  }

  ngOnDestroy() {
    if(this.messageSubscription) {
      this.messageSubscription.unsubscribe()
    }
  }

}
