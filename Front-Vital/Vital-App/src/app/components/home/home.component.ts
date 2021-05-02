import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productos: Producto[] = [];
  producto: Producto;
  baseEndpoint = 'http://localhost:9000/productos';

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService
      .getProductos()
      .subscribe((productos) => (this.productos = productos.slice(1, 5)));
  }

  traerTipo(tipo: string): void {
    this.productoService
      .getProductoTipo(tipo)
      .subscribe((productos) => (this.productos = productos));
  }
}
