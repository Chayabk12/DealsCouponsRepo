import { Component, OnInit } from '@angular/core';
import {product} from '../product'
import {DataService} from '../data.service';
import { NgForm } from '@angular/forms';
import{Router, RouterModule} from '@angular/router'
import {ProductPageComponent} from '../product-page/product-page.component';
import {MyserviceService}  from '../myservice.service';
import {user} from '../user';
import { from } from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers : [DataService]
})
export class HomePageComponent implements OnInit {

  productList: product[]=[]
   user : user[]=[]
username = "";

  getProduct(){

    this.dataservice.getproductsList()
    .subscribe(products=>{
      this.productList= products;
      console.log(' dtata from database',this.productList)
      console.log('fisrt elemnt', this.productList[0])
    })
  }

  dele(id){
    console.log("hello dlet function", id)
    this.dataservice.deleteProd(id)
    .subscribe(data=>{
      console.log(data)
       if(data.n==1){
for(var i = 0; i< this.productList.length; i++){
  if(id==this.productList[i]._id){
    this.productList.splice(i, 1)
  }
}
      } 
      console.log("deleted", data)
    }) 
    
  }

  clic(){
    this.router.navigateByUrl('/coupon')
  }

  mycart(){
    if(this.myservice.isLoggedIn()){
      console.log("hello")
      this.router.navigateByUrl("/cart");
    }
    else{
      this.router.navigateByUrl('/login')
      
    }
  
  }

  constructor(private dataservice: DataService, private router : Router, private myservice : MyserviceService) { 
   

  }

 
  ngOnInit(): void {
    this.getProduct();
   
  }


}
