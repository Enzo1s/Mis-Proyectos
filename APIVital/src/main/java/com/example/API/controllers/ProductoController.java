package com.example.API.controllers;

import com.example.API.entities.Producto;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "+")
@RequestMapping(path = "api/v1/persona")
public class ProductoController extends BaseControllerImpl<Producto, ProductoServiceImpl> {
}
