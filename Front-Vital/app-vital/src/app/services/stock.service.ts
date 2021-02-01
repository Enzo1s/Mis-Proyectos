import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  productosFile:any = (data as any).default;
  constructor() {
    console.log("Servicio Cargado!!");
    console.log(this.productosFile);
  }

  public getProductos():any[]{
    console.log(this.productosFile);
    return this.productosFile;
  }

  public getProductoId(idx:string):any{
    for(let producto of this.productosFile){
      if(producto.id == idx){
        return producto;
      }
    }
  }

  public searchProductos(termino:string):any[]{
    let productosArr:any[] =[];
    termino = termino.toLowerCase();
    for (let producto of this.productosFile){
      let nombre = producto.nombre.toLowerCase();
      if(nombre.indexOf(termino) >= 0){
        productosArr.push(producto);
      }
    }
    return productosArr;
  }
}
