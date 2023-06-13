package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Lugares;


public interface LugaresService {
	Lugares get_lugares(String code);
}
