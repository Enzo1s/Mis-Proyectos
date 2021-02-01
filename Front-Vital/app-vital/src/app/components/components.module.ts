import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { RouterModule } from '@angular/router';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';



@NgModule({
  declarations: [NavbarComponent, HomeComponent, ProductosComponent, DetalleProductoComponent],
  exports: [
    NavbarComponent, HomeComponent, ProductosComponent
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class ComponentsModule { }
