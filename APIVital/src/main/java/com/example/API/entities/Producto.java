package com.example.API.entities;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.envers.Audited;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Producto")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Audited
public class Producto extends Base {

    @Column(name = "nombre")
    @NotNull
    private String nombre;

    @Column(name = "rubro")
    private String rubro; //perecedero, no perecedero

    @Column(name = "tipo")
    private String tipo; //bebida, alimento, suplementos

    @Column(name = "precioKg")
    private float precioKg;

    @Column(name = "precioUnidad")
    private float precioUnidad;

    @Column(name = "stock")
    private float stock;
}
