import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  async register(email: string, password: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error registering:', error);
    }
  }
}
