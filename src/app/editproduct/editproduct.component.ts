import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product: Product;
  constructor(
    private routes: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.routes.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data => {
        this.product = data;
      })
    })
  }
  saveProduct(){
    this.productService.saveProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("/manage")
    })
  }
}
