import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private routers: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.routers.params.subscribe( param => {
      console.log(param);
      this.productService.getProduct(param.id).subscribe( data => {
        this.product = data;
      })
    })
  }
}
