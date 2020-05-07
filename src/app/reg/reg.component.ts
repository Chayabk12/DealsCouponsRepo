import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MyserviceService} from '../myservice.service'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  providers : [MyserviceService]
})
export class RegComponent implements OnInit {

myForm:  FormGroup;
successMessage: String = '';
  constructor( private myservice : MyserviceService) { 
    this.myForm = new FormGroup({
      email : new FormControl(null, Validators.email),
      username : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  isValid(controlName){
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }

  register(){

    console.log(this.myForm.value)
    if(this.myForm.valid){
    this.myservice.submitRegister(this.myForm.value)
    .subscribe(
      data => this.successMessage= "success regiter",
      errr => this.successMessage="some error"
    )}
  }
}
