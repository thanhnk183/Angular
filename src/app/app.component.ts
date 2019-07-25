import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anggular-tour-heroes';
  address: string;
  getAddress(value){
    console.log(value);
    this.address = value;
  }
}
