import { Component, OnInit } from '@angular/core';
import { Produc } from '../Produc'


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {


  produc: Produc = {
    title: "IPHONE X",
    description: "Điện thoại Iphone X 256G - Chính hãng Apple",
    price: 300000000,
    status: true
  };
  constructor() { }
  ngOnInit() {
  }
  onCLick = event =>{
    this.produc.title= "SAMSUNG";
  }

}
