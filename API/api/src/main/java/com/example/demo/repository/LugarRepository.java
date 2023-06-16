package com.example.demo.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entities.Lugares;

public interface LugarRepository extends CrudRepository<Lugares, UUID> {
        
    Lugares findByCode(UUID id);
}
