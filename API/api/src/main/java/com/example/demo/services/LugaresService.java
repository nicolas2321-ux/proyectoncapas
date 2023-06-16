package com.example.demo.services;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Lugares;


public interface LugaresService {
	Lugares get_lugares(String code);
	Lugares get_one_lugar(UUID id);
}
