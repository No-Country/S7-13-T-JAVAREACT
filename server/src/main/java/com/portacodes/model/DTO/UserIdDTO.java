package com.portacodes.model.DTO;

import com.portacodes.model.entity.Skill;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserIdDTO {
    private String name;
    private String authority;
    private String username;
    private String stack;
    private String image;
    private List<Skill> skills;
    private List<String> skillNames;
}

