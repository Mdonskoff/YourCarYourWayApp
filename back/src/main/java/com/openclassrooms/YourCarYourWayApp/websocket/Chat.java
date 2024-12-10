package com.openclassrooms.YourCarYourWayApp.websocket;

public class Chat {
    private String message;

    public Chat(String message) {
        this.message = message;
    }
    public Chat() {
        this.message = "";
    }
    public String getMessage() {
        return this.message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}
