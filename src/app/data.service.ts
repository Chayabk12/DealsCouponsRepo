import { Injectable } from '@angular/core';
import {Http, Response, Headers }  from '@angular/http';
import { map } from "rxjs/operators"; 
import { httpFactory } from '@angular/http/src/http_module';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http :Http ) { }

  getproductsList(){
    return this.http.get('http://localhost:1233/rest/getProducts')
    .pipe(map(res => res.json()));
  }
deleteProd(id){
  return this.http.delete('http://localhost:1234/apicall/del/'+id)
  .pipe(map(res=>res.json())) ;
}

  addProducts(newProduct){
    let headers = new Headers();
    headers.append('content-Type', 'application.json');
    return this.http.post('http://localhost:1234/apicall/pro', newProduct)
    .pipe(map(res=>res.json())) ;
  }



  //Coupons------------------>>>>>>
  getcoupons(){
    return this.http.get('http://localhost:1233/coupon/getCoupons')
    .pipe(map(res => res.json()));
  }

  addCoupons(newCoupon){
    let headers = new Headers();
    headers.append('content-Type', 'application.json');
    return this.http.post('http://localhost:1233/coupon/coupon', newCoupon)
    .pipe(map(res=>res.json())) ;
  }



  
//product----------------to  cart-------------->

  addProductToCart(prodcuts: any) {
    localStorage.setItem("product", JSON.stringify(prodcuts));
  }
  getProductFromCart() {
    //return localStorage.getItem("product");
    return JSON.parse(localStorage.getItem('product'));
  }

  removeAllProductFromCart() {
    return localStorage.removeItem("product");
  }
}
