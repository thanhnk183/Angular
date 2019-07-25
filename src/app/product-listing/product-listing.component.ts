import { Component, OnInit } from '@angular/core';
import { Produc } from '../Produc';

import {ProductService} from '../services/product.service';
// import { Data } from '../Data';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  // products = Data;
  products: Produc[];
  selectedProduct: Produc;
  isShow: boolean = false;
  constructor(
    private productServices: ProductService
  ) { }
  ngOnInit() {
      this.getProducts();
  }
  getProducts(){
    this.products = this.productServices.getProducts();
  }
  detailProduct(product){
    this.selectedProduct = product;
  }
}
