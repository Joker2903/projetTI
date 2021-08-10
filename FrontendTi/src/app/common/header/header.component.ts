import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentAdmin: Admin;

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.currentUserSub.subscribe(x => this.currentAdmin = x);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(["/auth", "signin"]);
  }

}
