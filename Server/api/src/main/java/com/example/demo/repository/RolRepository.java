package com.example.demo.repository;

import java.util.UUID;

import org.springframework.data.repository.ListCrudRepository;

import com.example.demo.model.entities.Rol;

public interface RolRepository extends ListCrudRepository<Rol, UUID> {
    Rol findByRol(String rol);
}
