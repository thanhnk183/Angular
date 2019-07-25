import { Injectable } from '@angular/core';
import { Data } from '../Data';
import { Produc } from '../Produc';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = Data;

  constructor() { }
  getProducts():Produc[]{
    return this.products;
  }

  addProduct(product){
    const newProduct = {id: this.products.length + 1, ...product};
    console.log(newProduct);
    return this.products.push(newProduct);
  }
}
