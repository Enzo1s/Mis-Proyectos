import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  protected nombreModel: string;

  constructor(private productoService: ProductoService) {
    this.nombreModel = Producto.name;
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService
      .getProductos()
      .subscribe((productos) => (this.productos = productos));
  }
}
