import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService,private router:Router) { }
  userDetails = { uname:"",password:""};
  message="";
  SignIn()
  {
    let isvalid = this.service.Login(this.userDetails);
    if(isvalid)
    {
      this.router.navigate(['home']);
    }
    else{
      this.message = "Uname/Password is invalid!!";
    }
  }

  ngOnInit() {
  }

}
