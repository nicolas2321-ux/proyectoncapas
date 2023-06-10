package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Rol;
import com.example.demo.entities.User;

public interface user_rolService {
	List<Rol> getRolbyUser(User user);
}
