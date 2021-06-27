package com.example.API.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.API.security.entity.Rol;
import com.example.API.security.enums.RolNombre;

@Repository
public interface RolRepository extends JpaRepository<Rol, Long>{
	
	Optional<Rol> findByRolNombre(RolNombre rolNombre);

}
