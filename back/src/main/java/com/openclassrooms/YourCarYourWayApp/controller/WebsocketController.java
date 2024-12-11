package com.openclassrooms.YourCarYourWayApp.controller;

import com.openclassrooms.YourCarYourWayApp.websocket.Chat;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class WebsocketController {

    @MessageMapping("/newMessage")
    @SendTo("/topic/sendMessage")
    public Chat newChat(@RequestBody Chat message) throws Exception {
        return message;
    }

}
