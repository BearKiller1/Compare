import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { AuthorizeService } from '../authorize.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  data:any;
  
  registerGroup = new FormGroup({
    mail: new FormControl(''),
    username: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    repeat: new FormControl(''),
  });

  constructor(
    private Obj:AuthorizeService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  regist(){

    this.data = this.registerGroup.value;
    if(this.data.password == this.data.repeat){
      this.Obj.singUp(this.data.username, this.data.password,this.data.mail,this.data.gender).subscribe( (tmp:any) =>{
        console.log(tmp);   
        this.router.navigate(["../login"], {relativeTo:this.route});
      });
    }
    else{
      alert("reoeat password correctly");
    }

  }
}
