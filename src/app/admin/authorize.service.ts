import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  loginlink = "http://localhost/loginExample/API/login.php";
  signuplink = "http://localhost/loginExample/API/signup.php";

  constructor(private http:HttpClient) { }

  login(user:any,pwd:any){
    return this.http.get(this.loginlink + '?username='+ user +'&password=' + pwd).subscribe( (tmp:any) =>{
      localStorage.setItem("token",tmp.result);
    });
  } 
  singUp(user:any,pwd:any,mail:any,gender:number){
    return this.http.get(this.signuplink + '?username='+ user +'&password=' + pwd + '&email=' + mail + '&gender='+gender);
  };
}
