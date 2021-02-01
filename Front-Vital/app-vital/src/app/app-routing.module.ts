import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'productos', component: ProductosComponent},
  {path: 'detalleProducto/:id', component: DetalleProductoComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
