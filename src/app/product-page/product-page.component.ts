import { Component, OnInit } from '@angular/core';
import {product} from '../product'
import {DataService} from '../data.service';
import { MyserviceService} from '../myservice.service';
import {IAlert} from '../Models/IAlert';
import { Router } from '@angular/router';
import {coupon} from '../coupon';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  providers : [DataService]
})
export class ProductPageComponent implements OnInit {

  constructor(private dataservice: DataService, private myservice : MyserviceService, private router : Router) { 
   this.getcouponname()
  }
  coupons: coupon;
  productList: product[]=[]
productAddedToCart: product[];
public alerts: Array<IAlert> = [];
  cartItemCount: number = 0;
  getProduct(){

    this.dataservice.getproductsList()
    .subscribe(products=>{
      this.productList= products;
      console.log(' dtata from database',this.productList)
      console.log('fisrt elemnt', this.productList[0])
    })
  }

  ngOnInit(): void {

    this.getProduct()
  }


  getcouponname(){
    this.coupons=JSON.parse(localStorage.getItem('coupon'))
  }
  OnAddCart(product:product)
  {

    if(this.myservice.isLoggedIn()){
    console.log(product);
    
    this.productAddedToCart=this.dataservice.getProductFromCart();
    if(this.productAddedToCart==null)
    {
      this.productAddedToCart=[];
      this.productAddedToCart.push(product);
      this.dataservice.addProductToCart(this.productAddedToCart);
      this.alerts.push({
        id: 1,                             
        type: 'success',
        message: 'Product added to cart.'
      });
      setTimeout(()=>{   
        this.closeAlert(this.alerts);
   }, 3000);

    }
    else
    {
      let tempProduct=this.productAddedToCart.find(p=>p._id==product._id);
      if(tempProduct==null)
      {
        this.productAddedToCart.push(product);
        this.dataservice.addProductToCart(this.productAddedToCart);
        this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Product added to cart.'
        });
        //setTimeout(function(){ }, 2000);
        setTimeout(()=>{   
          this.closeAlert(this.alerts);
     }, 3000);
      }
      else
      {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: 'Product already exist in cart.'
        });
        setTimeout(()=>{   
          this.closeAlert(this.alerts);
     }, 3000);
      }
      
    }
  }
  else
  {
    this.router.navigateByUrl('/login');
  }
    //console.log(this.cartItemCount);
    this.cartItemCount=this.productAddedToCart.length;
    // this.cartEvent.emit(this.cartItemCount);
   // this.sharedService.updateCartCount(this.cartItemCount);
  }

  public closeAlert(alert:any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
}   
}





