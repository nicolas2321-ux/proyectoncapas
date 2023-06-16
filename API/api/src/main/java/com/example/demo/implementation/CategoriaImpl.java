package com.example.demo.implementation;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Categoria;
import com.example.demo.repository.CategoriaRepository;
import com.example.demo.services.CategoriaService;

@Service
public class CategoriaImpl implements CategoriaService{
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Override
	public Categoria get_categoria(UUID code) {
		Categoria categoria = categoriaRepository.findByIdCategoria(code);
		return categoria;
	}

}
