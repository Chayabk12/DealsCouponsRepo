import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import{Router, RouterModule} from '@angular/router'
import {user} from '../user';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms'
import{ AuthenticService, TokenPayload, UserDetails} from '../authentic.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  providers : [DataService]
})
export class RegisterPageComponent implements OnInit {



  constructor(private auth: AuthenticService, private route: Router){}
  
  ngOnInit(){
  }

  credentials: TokenPayload ={
      _id :'',
      first_name :'',
      last_name :'',
      email:'',
      password :''
}

register(){
  console.log("name" +this.credentials.first_name)
    this.auth.register(this.credentials).subscribe(
      ()=>{
        this.route.navigateByUrl('/login')
      },
      err=>{
        console.error(err + 'error')
      }
    ) 
  }


 /*  registrationForm = new FormGroup({
    'first_name': new FormControl('Enter your name', [
        Validators.required,
    ]),
    'last_name': new FormControl('Enter your name', [
        Validators.required
    ]),
    'email': new FormControl('Enter your name', [
      Validators.required
  ]),
  'password': new FormControl('Enter your name', [
    Validators.required
])
}) */

}