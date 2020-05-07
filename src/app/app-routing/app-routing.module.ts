import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';
import {AboutUsPageComponent} from '../about-us-page/about-us-page.component'
import {ProductPageComponent} from '../product-page/product-page.component';
import {CartPageComponent} from '../cart-page/cart-page.component'
import { LogComponent} from  '../log/log.component';
import {RegComponent} from '../reg/reg.component';
import {CouponsComponent} from '../coupons/coupons.component';
import {CheckoutComponent} from '../checkout/checkout.component'
  import { from } from 'rxjs';

const routes: Routes= [{
  path: '',
  component: HomePageComponent
},
{
  path : 'aboutus',
  component : AboutUsPageComponent
},
{
  path : 'ProPage',
  component: ProductPageComponent
},
{
path: 'login',
component : LogComponent
},
{
  path : 'register',
  component : RegComponent
},

{
  path  : 'cart',
  component : CartPageComponent
},
{
  path : 'coupon',
  component : CouponsComponent
},
{
  path : 'checkout',
  component: CheckoutComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
})
export class AppRoutingModule { }
