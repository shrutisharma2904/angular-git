import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  constructor(private service:AuthService,private router:Router) { }

  Logout()
  {
    this.service.Logout;
    this.router.navigate(['login']);
  }
}
