package com.portacodes.model.service;

import com.portacodes.model.entity.Skill;
import com.portacodes.model.entity.User;
import com.portacodes.model.repository.SkillRepository;
import com.portacodes.model.repository.UserRepository;
import com.portacodes.responses.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class SkillService implements ISkillService{
    @Autowired
    private SkillRepository skillRepository;

    @Autowired
    private UserRepository userRepository;


    @Override
    public Skill save(Skill skill) {
        return skillRepository.save(skill);
    }

    @Override
    public Optional<Skill> findById(Integer id) {
        return skillRepository.findById(id);
    }

    @Override
    public void update(Skill skill) {
        skillRepository.save(skill);
    }

    @Override
    public void delete(Integer id) {
        skillRepository.deleteById(id);
    }

    @Override
    public List<Skill> findAll() {
        return skillRepository.findAll();
    }

    @Override
    public void saveSkill(Integer userId, List<String> skill) throws UserNotFoundException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            User user1 = user.get();
            List<Skill> skills = new ArrayList<>();
            for (String s : skill) {
                Skill newSkill = new Skill();
                newSkill.setName(s); // Establecer el nombre de la habilidad
                newSkill.setUser(user1); // Establecer el usuario en la habilidad
                skills.add(newSkill);
            }

            user1.setSkills(skills);

            skillRepository.saveAll(skills);
        } else {
            throw new UserNotFoundException("Usuario no encontrado con ID: " + userId);
        }
    }

    @Override
    public List<String> findSkill(Integer userId) throws UserNotFoundException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            List<Skill> skills = user.get().getSkills();
            List<String> skillNames = new ArrayList<>();
            for (Skill skill : skills) {
                if (skill != null) {
                    skillNames.add(skill.getName());
                }
            }
            skillNames.removeIf(Objects::isNull); // Eliminar elementos nulos
            return skillNames;
        } else {
            throw new UserNotFoundException("Usuario no encontrado con ID: " + userId);
        }
    }
}
