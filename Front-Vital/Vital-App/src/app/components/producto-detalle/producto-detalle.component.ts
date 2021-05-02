import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css'],
})
export class ProductoDetalleComponent implements OnInit {
  producto: Producto;
  tipoProducto: string;
  baseEndpoint = 'http://localhost:9000/productos';
  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productoService
      .getProductoId(id)
      .subscribe((producto) => (this.producto = producto));
  }

  getTipoProducto(): void {
    this.tipoProducto = this.producto.tipo.toString();
  }
}
