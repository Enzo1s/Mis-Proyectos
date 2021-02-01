import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productosArr:any[] [];

  constructor(private servicioStock:StockService, private router:Router) {

   }

  ngOnInit(): void {
    this.productosArr = this.servicioStock.getProductos();
    console.log(this.productosArr);
  }

  public verProducto(idx:string){
    this.router.navigate(['/producto',idx])
  }

}
