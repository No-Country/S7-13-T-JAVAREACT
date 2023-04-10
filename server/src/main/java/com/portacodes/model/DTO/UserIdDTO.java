package com.portacodes.model.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserIdDTO {
    private String nombres;
    private String email;
    private String role;
    private String authority;
    private String username;
}

