import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css'],
})
export class ProductoFormComponent implements OnInit {
  titulo: string;
  producto: Producto;
  //error: any;
  protected redirect: '/productos';
  constructor(
    protected productoService: ProductoService,
    protected router: Router,
    protected route: ActivatedRoute
  ) {
    this.titulo = 'Crear Productos';
    this.producto = new Producto();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id: number = +params.get('id');
      if (id) {
        this.productoService.getProductoId(id).subscribe((producto) => {
          this.producto = producto;
          this.titulo = 'Editar producto';
        });
      }
    });
  }

  public crear(): void {
    this.productoService.createProducto(this.producto).subscribe((producto) => {
      alert(`${producto.nombre} creado con éxito`);
      this.router.navigate([this.redirect]);
    });
  }

  public editar(): void {
    this.productoService.updateProducto(this.producto).subscribe((producto) => {
      alert(`${this.producto.nombre} actualizado con éxito`);
      this.router.navigate([this.redirect]);
    });
  }
}
