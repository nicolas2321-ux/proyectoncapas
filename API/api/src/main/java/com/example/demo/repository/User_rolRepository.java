package com.example.demo.repository;

import java.util.UUID;

import org.springframework.data.repository.ListCrudRepository;

import com.example.demo.entities.User;
import com.example.demo.entities.User_rol;
import java.util.List;
import java.util.Optional;


public interface User_rolRepository extends ListCrudRepository<User_rol, UUID> {
    
    List<User_rol> findByUserAndEstado(User id_user, Integer estado);

    User_rol findBycode(UUID code);
}
