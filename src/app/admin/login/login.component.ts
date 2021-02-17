import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { AuthorizeService } from '../authorize.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  api_key:any;

  userGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private Obj:AuthorizeService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  log(){
    var data = this.userGroup.value;
    this.api_key = this.Obj.login(data.username, data.password);

    if(this.api_key){
      localStorage.removeItem("token");
      this.router.navigate(['../dashboard'], {relativeTo:this.route});
    }
    else{
      alert("password is incorect");
    }
  }

}
