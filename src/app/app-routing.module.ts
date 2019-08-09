import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  // { path: '**', component: NotfoundComponent},
  { path: 'products/:id', component: ProductDetailComponent},
  { path: 'manage', component: ProductManageComponent},
  { path: 'addProduct', component: AddproductComponent},
  { path: 'products/edit/:id', component: EditproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
