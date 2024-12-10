package com.openclassrooms.YourCarYourWayApp.controller;

import com.openclassrooms.YourCarYourWayApp.websocket.Chat;
import com.openclassrooms.YourCarYourWayApp.websocket.Greeting;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class WebsocketController {
    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(Chat message) throws Exception {
        Thread.sleep(1000); // simulated delay
        return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getMessage()) + "!");
    }

}
