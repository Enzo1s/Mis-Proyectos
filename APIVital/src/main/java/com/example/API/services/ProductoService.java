package com.example.API.services;

import com.example.API.entities.Producto;

import java.util.List;
import java.util.Map;

public interface ProductoService extends BaseService<Producto, Long> {

    List<Producto> search(String filtro) throws Exception;
    public Map<String, Object> search(String filter, int page, int size, String sortBy, String direction) throws Exception;

}
