import {Injectable, OnDestroy} from '@angular/core';
import {Stomp, CompatClient, StompSubscription} from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService implements OnDestroy {
private subscription: StompSubscription | undefined
private connexion: CompatClient | undefined = undefined

  constructor() {
  this.connexion = Stomp.client('ws://localhost:8080/websocket')
    this.connexion.connect({}, () => {})
}
public send(message: string = 'test'): void{
  if(this.connexion && this.connexion.connected) {
    this.connexion.send('', {}, JSON.stringify(message))
  }
}
public listen(): void{
  if(this.connexion) {
    this.connexion.connect({}, () => {
      this.subscription = this.connexion!.subscribe('', message => {
        console.log(message)
      })
    })
  }
}
ngOnDestroy(): void{
  if(this.subscription) {
    this.subscription.unsubscribe();
  }
}
}
