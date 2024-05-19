import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  isLoggedIn = false;
  constructor(private authService: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  async logout() {
    this.authService.logout().then(() => {
      this.isLoggedIn = false;
      this._snackBar.open("Sikeres kijelentkezés", undefined, {duration: 2000});
    });
  }
}
