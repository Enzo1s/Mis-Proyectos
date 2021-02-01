package com.example.API.repositories;

import com.example.API.entities.Producto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends BaseRepository<Producto,Long> {

    List<Producto> findByNombreContaining(String nombre);

    Page<Producto> findByNombreContaining(String nombre, Pageable pageable);

    @Query(value = "SELECT p FROM Producto p WHERE p.nombre LIKE %:filtro%")
    List<Producto> search(@Param("filtro") String filtro);

    @Query(value = "SELECT p FROM Producto p WHERE p.nombre LIKE %:filtro%")
    Page<Producto> search(@Param("filtro") String filtro, Pageable pageable);

    @Query(
            value = "SELECT * FROM Producto WHERE Producto.nombre LIKE %:filtro%",
            nativeQuery = true
    )
    List<Producto> searchNativo(@Param("filtro") String filtro);

    @Query(
            value = "SELECT * FROM Producto WHERE Producto.nombre LIKE %:filtro%",
            countQuery = "SELECT count(*) FROM Producto",
            nativeQuery = true
    )
    Page<Producto> searchNativo(@Param("filtro") String filtro, Pageable pageable);
}
