import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of} from 'rxjs'
import { map} from 'rxjs/operators'
import { Router } from '@angular/router'




export interface UserDetails{
    _id : string
    first_name : string
    last_name  : string
    email: string
    password : string
    exp: number
    iat: number
}

  interface TokenResponse {
    token : string
  }

  export interface TokenPayload{
    _id : string
    first_name: string
    last_name : string
    email: string
    password: string
  }


@Injectable({
  providedIn: 'root'
})
export class AuthenticService {

  private token :string
  constructor( private http: HttpClient, private router: Router) { }

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

   public getUserDetails():UserDetails{
    const token = this.getToken()
    let payload
    if(token){
      payload=token.split('.')[1]
      // payload= token.atob(payload)
      return JSON.parse(payload)
    }else{
      return null
    }
  } 

   public isLoggedin():boolean{
      const user =this.getUserDetails()
      if(user){
        return user.exp>Date.now()/1000
      }
      else{
          return false
      }
  } 

  public register(user: TokenPayload): Observable<any>{
    const base = this.http.post('http://localhost:3000/users/register', user)

    const request =base.pipe(
      map((data:TokenResponse)=>{
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })

    )
    return request
  }

  public login(user : TokenPayload): Observable<any>{
    const base = this.http.post('http://localhost:3000/users/login', user)
console.log(base)
    const request = base.pipe(
      map((data: TokenResponse)=>{
        if(data.token){
          console.log("res from backend in if ",data.token)
          this.saveToken(data.token)   
        }
        else{
          console.log("res from backend in else ",data.token)
          return false
        }
        return data
      })
      
    )
    return request
  }

   public profile():Observable<any>{
    return this.http.get('http://localhost:3000/users/profile', {
      headers: { Authorization: `${this.getToken()}`}
    })
  } 

  public logout():void{
    this.token= ''
    window.localStorage.removeItem('usertoken')
    this.router.navigateByUrl('/')
  }
}

