import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { AuthorizeService } from './admin/authorize.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Obj:AuthorizeService, private route:ActivatedRoute, private router:Router){}
  
  canActivate(): any { // aq any imito weria ro boolinze eroria boolin tu gaq if s vegar dauwer
    if(localStorage.getItem('token') != ""){
      return true;
    }
    else{
      return false;
    }
  }
  
}
