package com.example.API.services;

import com.example.API.entities.Producto;
import com.example.API.repositories.BaseRepository;
import com.example.API.repositories.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProductoServiceImpl extends BaseServiceImpl<Producto, Long> implements ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public ProductoServiceImpl(BaseRepository<Producto, Long> baseRepository) {
        super(baseRepository);
    }

    @Override
    public List<Producto> search(String filtro) throws Exception {
        try {
            List<Producto> productos = productoRepository.searchNativo(filtro);
            return productos;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public Map<String, Object> search(String filter, int page, int size, String sortBy, String direction) throws Exception {
        try {
            Pageable pageable;
            if (direction.equals("desc")) {
                pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sortBy));
            } else {
                pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, sortBy));
            }

            Page<Producto> entityPage = productoRepository.search(filter, pageable);
            List<Producto> entities = entityPage.getContent();

            Map<String, Object> respose = new HashMap<>();
            respose.put("payload", entities);
            respose.put("length", entityPage.getTotalElements());
            return respose;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
