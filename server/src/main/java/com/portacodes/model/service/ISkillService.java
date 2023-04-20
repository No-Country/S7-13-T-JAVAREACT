package com.portacodes.model.service;

import com.portacodes.model.entity.Skill;
import com.portacodes.responses.UserNotFoundException;

import java.util.List;
import java.util.Optional;

public interface ISkillService {
    public Skill save(Skill skill);

    public Optional<Skill> findById(Integer id);

    public void update(Skill skill);

    public void delete(Integer id);

    public List<Skill> findAll();

    public void saveSkill(Integer userId, List<String> skill) throws UserNotFoundException;

    List<String> findSkill(Integer usuarioId) throws UserNotFoundException;
}
