package com.portacodes.responses;

import com.portacodes.auth.AuthenticationResponse;

public class SuccessResponse {
    private String message;


    public SuccessResponse(String message, AuthenticationResponse response) {
        this.message = message;

    }

    public String getMessage() {
        return message;
    }


}
