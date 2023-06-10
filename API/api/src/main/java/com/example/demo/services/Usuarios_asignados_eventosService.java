package com.example.demo.services;

import java.util.List;

import com.example.demo.entities.Evento;
import com.example.demo.entities.User;

public interface Usuarios_asignados_eventosService {
	List<User> getUserInEvents(Evento evento);
}
