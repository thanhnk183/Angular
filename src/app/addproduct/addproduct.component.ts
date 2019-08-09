import { Component, OnInit, Input  } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  @Input('data') products: Product[];
  product: Product = new Product();

  constructor(
    private router: Router,
    private productService:ProductService
  ) { }

  ngOnInit() {
  }

  addProduct(){
  this.productService.addProduct(this.product).subscribe( data =>{
    this.router.navigateByUrl("/manage")
  })
  }
}
