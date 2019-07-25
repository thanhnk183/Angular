import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ProductService} from '../services/product.service';
import { Produc } from '../Produc';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output('keyAddress') onHandleAddress = new EventEmitter<string>();
  // address: string;
  product: Produc = new Produc();
  constructor(
    private productServices: ProductService
  ) { }

  ngOnInit() {
  }
  // onHandleClick(){
  //   // console.log(this.address);
  //   this.onHandleAddress.emit(this.address);
  // }
  addProduct(){
    console.log(this.product);
    this.productServices.addProduct(this.product);
  }
}
