import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { map} from 'rxjs/operators';
import {user} from './user';

interface TokenResponse {
  token : string
}
@Injectable({
  providedIn: 'root'
})



export class MyserviceService {
  private token: string;
  body: any;


  constructor(private http : HttpClient) { }


  public getUserDetails():user{
  const token = this.getToken()
    let payload
    if(token){
      payload=token.split('.')[1]
     payload= window.atob(payload)
    
      var obj= JSON.parse(payload)
      return  obj
    }else{
      return null
    }
  } 
 
  private saveToken(token: string):void{
    localStorage.setItem('usertoken', token)
    this.token=token
 }

 private getToken():string{
  if(!this.token){
    this.token = localStorage.getItem('usertoken')
  }
  return this.token
}
/** create user */
submitRegister(body : any){
      var base= this.http.post('http://localhost:1233/rest/register', body,{
    
    observe:'body'});

  const request=base.pipe(map((data:TokenResponse)=>{
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
  )
return request ;
 
 }

 /*user login/ verify user*/
 login(body:any){
  const base= this.http.post('http://localhost:1233/rest/login', body,{
    observe:'body'
  });
  console.log(base)
    const request = base.pipe(  
      map((data: TokenResponse)=>{
        if(data.token){
          console.log("res from backend in if ",data.token)
          this.saveToken(data.token)   
          console.log("user data")
          console.log(this.getUserDetails())
          console.log(this.getUserDetails().userName)
          console.log('helllli')
        }
        else{
          console.log("res from backend in else ",data.token)
          return false
        }
        return data
      }
      )
    )
    return request
}





/* check logged in  */ 
isLoggedIn(): boolean {
  console.log('check loggd in')
  return ( localStorage.getItem('usertoken') !== null );
}


getUserName() {
  return this.http.get('http://localhost:1233/rest/username', {
    observe: 'body',
    params: new HttpParams().append('token', localStorage.getItem('token'))
    
  });
 
}




}
