import { Component, OnInit } from '@angular/core';
import { Produc } from '../Produc';
import {Data} from '../Data'


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {


  products = Data;
  selectedProduct: Produc;
  isShow: boolean = false;
  constructor() { }
  ngOnInit() {
  }
  detailProduct(product){
    this.selectedProduct = product;
  }
}
