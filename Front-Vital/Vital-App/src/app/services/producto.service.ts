import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Producto } from '../models/producto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  protected baseEndpoint = 'http://localhost:9000/productos';

  protected cabeceras: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(protected http: HttpClient) {}

  public getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseEndpoint);
  }

  public listProductos(page: string, size: string): Observable<any> {
    const params = new HttpParams().set(`page`, page).set(`size`, size);
    return this.http.get<any>(`${this.baseEndpoint}/pagina`, {
      params: params,
    });
  }

  public getProductoTipo(tipo: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      `${this.baseEndpoint}/filtrar/tipo/${tipo}`
    );
  }

  public getProductoId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseEndpoint}/${id}`);
  }

  public createProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.baseEndpoint}/crear`, producto, {
      headers: this.cabeceras,
    });
  }

  public updateProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(
      `${this.baseEndpoint}/${producto.id}`,
      producto,
      { headers: this.cabeceras }
    );
  }

  public deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }
}
