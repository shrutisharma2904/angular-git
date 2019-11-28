import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) 
  {
    if(this.IsLoggedIn())
    {
      return true;
    }
    else{
      this.router.navigate(['login']);
    return false;
    }
  }
  IsLoggedIn()
  {
    if(window.sessionStorage.getItem('active') != null && window.sessionStorage.getItem('active') == "1")
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  constructor(private router:Router) 
  { }
  Login(userDetails)
  {
    if(userDetails.uname == "abc" && userDetails.password == "abc@123")
    {
      window.sessionStorage.setItem('active','1');
      return true;
    }
    else{
      return false;
    }
  }
  Logout(userDetails)
  {
    if(userDetails.uname == "abc" && userDetails.password == "abc@123")
    {
      window.sessionStorage.setItem('active','0');
      return true;
    }
    else{
      return false;
    }
  }
}
