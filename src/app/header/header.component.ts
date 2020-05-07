import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private myservice: MyserviceService, private  router: Router ) { }



  mycart(){
    if(this.myservice.isLoggedIn()){
      console.log("hello")
      this.router.navigateByUrl("/cart");
    }
    else{
      this.router.navigateByUrl('/login')
      
    }}
  ngOnInit(): void {
  }


 
}
