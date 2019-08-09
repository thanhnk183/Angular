import { Injectable } from '@angular/core';
import { Product } from '../Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API: string = 'http://5d44da52d823c30014771a0b.mockapi.io/products'

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API);
  }

  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  addProduct(product): Observable<Product>{
    return this.http.post<Product>(this.API, product);
  }

  saveProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.API}/${product.id}`, product);
  }

  deleteProduct(id): Observable<Product>{
    return this.http.delete <Product>(`${this.API}/${id}`);
  }
}
