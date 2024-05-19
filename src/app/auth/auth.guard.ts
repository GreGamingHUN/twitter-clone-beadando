import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      return new Promise<boolean>((resolve) => {
        this.authService.getCurrentUser().subscribe((user) => {
          if (user) {
            resolve(true);
          } else {
            this.router.navigate(['/login']);
            resolve(false);
          }
        });
      });
  }
}