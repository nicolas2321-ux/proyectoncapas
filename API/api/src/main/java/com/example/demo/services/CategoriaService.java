package com.example.demo.services;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Categoria;


public interface CategoriaService {
	Categoria get_categoria(UUID code);
}
