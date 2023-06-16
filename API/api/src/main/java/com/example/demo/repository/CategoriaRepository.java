package com.example.demo.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.entities.Categoria;

public interface CategoriaRepository extends CrudRepository<Categoria, UUID>{
    Categoria findByIdCategoria(UUID id);
}
