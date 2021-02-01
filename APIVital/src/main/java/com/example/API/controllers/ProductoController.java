package com.example.API.controllers;

import com.example.API.entities.Producto;
import com.example.API.services.ProductoServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "api/v1/productos")
public class ProductoController extends BaseControllerImpl<Producto, ProductoServiceImpl> {

    @GetMapping("/search")
    public ResponseEntity<?> search(@RequestParam String filtro) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.search(filtro));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\":\"" + e.getMessage() + "\"}");
        }
    }

    @GetMapping("/searchPaged")
    public ResponseEntity<Map<String, Object>> search(
            @RequestParam(required = true) String filter,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "desc") String direction
    ) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(servicio.search(filter, page, size, sortBy, direction));
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

