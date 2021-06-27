package com.example.API.security.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.example.API.security.enums.RolNombre;
import com.sun.istack.NotNull;

@Entity
public class Rol {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
    @Enumerated(EnumType.STRING)
    @NotNull
    @Column(unique = true)
    private RolNombre rolNombre;

    public Rol() {}
    
    public Rol(RolNombre rolNombre) {
    	this.rolNombre = rolNombre;
    }
    
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public RolNombre getRolNombre() {
		return rolNombre;
	}

	public void setRolNombre(RolNombre rolNombre) {
		this.rolNombre = rolNombre;
	}

}
