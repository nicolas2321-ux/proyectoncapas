package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Categoria;


public interface CategoriaService {
	Categoria get_categoria(String code);
}
