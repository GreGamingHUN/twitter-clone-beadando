import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {MatSnackBar} from '@angular/material/snack-bar';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private _snackBar: MatSnackBar) { }

  async login(email: string, password: string) {
    try {
      let result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this._snackBar.open("Sikeres bejelentkezés", undefined, {duration: 2000}); 
    } catch (error) {
      console.error('Error logging in:', error);
    }

    await this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
      this._snackBar.open("Sikeres bejelentkezés", undefined, {duration: 2000});
    }).catch((error) => {
      this._snackBar.open("Hiba: " + error.message, undefined, {duration: 2000}); 
    });
  }

  async register(email: string, password: string, displayName: string) {
      await this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
        result.user?.updateProfile({
          displayName: displayName
        }).then(() => {
          this._snackBar.open("Sikeres regisztráció", undefined, {duration: 2000});
        }).catch((error) => {
          this._snackBar.open("Hiba: " + error.message, undefined, {duration: 2000});
        });
      }).catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          this._snackBar.open("Ez az e-mail cím már foglalt", undefined, {duration: 2000}); 
        } else {
          this._snackBar.open("Hiba: " + error.message, undefined, {duration: 2000}); 
        }
      })
  }

  getCurrentUser() {
    return this.afAuth.user;
  }

  async logout() {
    return this.afAuth.signOut();
  }
}
