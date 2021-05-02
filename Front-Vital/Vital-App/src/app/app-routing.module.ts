import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'detalle/:id', component: ProductoDetalleComponent },
  { path: 'producto-form', component: ProductoFormComponent },
  { path: 'producto-form/:id', component: ProductoFormComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
