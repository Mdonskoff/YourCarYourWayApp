import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ChatServiceService} from '../../service/chat-service.service';
import {MessageInterface} from '../../interface/message.interface';
import {DatePipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Subscription} from 'rxjs';
import {HeaderComponent} from '../../../core/header/header.component';

@Component({
  selector: 'app-chat',
  imports: [
    DatePipe,
    NgForOf,
    NgIf,
    HeaderComponent
  ],
  templateUrl: './chat.component.html',
  standalone: true,
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit, OnDestroy {

  listMessage: MessageInterface [] = []
  messageSubscription!: Subscription;
  @ViewChild("content") content: ElementRef<HTMLInputElement> | undefined

  constructor(private chatService: ChatServiceService) {
  }
  ngOnInit() : void {
    this.listenMessage()
  }

  sendMessage(content: string): void {
    let message : MessageInterface = { id: 1, message: content, date : new Date() }
    this.content!.nativeElement.value = "" //remet l'élément à vide une fois le msg send
    this.chatService.send(message)
  }
  listenMessage(): void {
    this.chatService.getCurentContent().subscribe((messages: Array<MessageInterface>) => {
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
