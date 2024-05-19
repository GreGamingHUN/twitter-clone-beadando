import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  isLoggedIn = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    let accountData = this.authService.getCurrentUser();
    console.log(accountData)
    if (accountData !== null) {
      this.isLoggedIn = true;
    }
  }

  async logout() {
    this.authService.logout();
  }
}
