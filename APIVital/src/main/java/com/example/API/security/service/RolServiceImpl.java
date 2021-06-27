package com.example.API.security.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.API.security.entity.Rol;
import com.example.API.security.enums.RolNombre;
import com.example.API.security.repository.RolRepository;

@Service
@Transactional
public class RolServiceImpl {

	@Autowired
	private RolRepository rolRepository;
	
	public Optional<Rol> getByRolNombre(RolNombre rolNombre) {
		return rolRepository.findByRolNombre(rolNombre);
	}
	
	public Rol save(Rol rol) {
		return rolRepository.save(rol);
	}
	
	public Iterable<Rol> getAll(){
		return rolRepository.findAll();
	}
}
