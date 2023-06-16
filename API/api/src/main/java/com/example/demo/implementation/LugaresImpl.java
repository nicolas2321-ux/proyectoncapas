package com.example.demo.implementation;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Lugares;
import com.example.demo.repository.LugarRepository;
import com.example.demo.services.LugaresService;
@Service
public class LugaresImpl implements LugaresService{
	@Autowired
	private LugarRepository lugarRepository;

	@Override
	public Lugares get_lugares(String code) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Lugares get_one_lugar(UUID id) {
		Lugares lugar = lugarRepository.findByCode(id);
		return lugar;

	}

	@Override
	public void save_lugar(Lugares lugar) {
		lugarRepository.save(lugar);
	}

}
