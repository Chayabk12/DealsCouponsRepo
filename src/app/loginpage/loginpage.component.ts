import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import{ AuthenticService, TokenPayload} from '../authentic.service'
import { Router} from '@angular/router'
import {user} from '../user';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  providers : [DataService]
})
export class LoginpageComponent implements OnInit {

  userList: user[]=[]

  constructor(private auth: AuthenticService, private route: Router ) { }

 /*  loginuser(form){
    let userl: user={
      userName: form.value.userName,
      password: form.value.password
    } 
    console.log("login user data", userl)
    this.dataservice.login(userl)
   .subscribe(data=>{
      console.log(data)
    }) 
    
  } */


  ngOnInit(): void {
  }


   credentials: TokenPayload= {
    _id :'',
    first_name :'',
    last_name :'',
    email:'',
    password :''
   }


  login(){
     this.auth.login(this.credentials).subscribe
    (data => {
        if(data){
        this.route.navigateByUrl('/')
        }
        else{
          alert("Invalid Email or Password")
        }
      },err=>
      console.error(err +'error : '))
  }
 
}
