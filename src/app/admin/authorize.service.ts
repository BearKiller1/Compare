import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  users = [
    {id:1, username:"dachi", password:"dachi", token:"test"}
  ]
  loginlink = "http://localhost/loginExample/API/login.php";
  signuplink = "http://localhost/loginExample/API/signup.php";

  constructor(private http:HttpClient) { }

  login(user:any,pwd:any): any{
    for(var i=0; i!=this.users.length;i++){
      if(user == this.users[i]["username"] && pwd == this.users[i]["password"]){
        localStorage.setItem("token",this.users[i]["token"]);
        return this.users[i]["token"];
      }
    }

    // return this.http.get(this.loginlink + '?username='+ user +'&password=' + pwd).subscribe( (tmp:any) =>{
    //   localStorage.setItem("token",tmp.result);
    // });

  } 
  singUp(user:any,pwd:any,mail:any,gender:number){
    return this.http.get(this.signuplink + '?username='+ user +'&password=' + pwd + '&email=' + mail + '&gender='+gender);
  };
}
