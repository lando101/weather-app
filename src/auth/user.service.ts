import { inject, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Auth } from '@angular/fire/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private auth: Auth = inject(Auth);
  constructor(private router: Router){
  }

  // sign up with email and password
  signUpEmail(user: User): Promise<any> {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in 
          const user_cred = userCredential.user;
          resolve(user_cred);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          reject(errorMessage);
        });
    });
  }

  // sign in w/ email and password
  signInEmail(email: string, password: string): Promise<any>{
    return new Promise((resolve, reject)=>{
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
          const user_cred = userCredential.user;
          resolve(user_cred);
        })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          reject(errorMessage);
        });
    })
  }

  // sign out
  signOut(){
    return new Promise((resolve, reject)=>{
      const auth = getAuth();
      signOut(auth)
        .then((stat)=>{
          const result = stat;
          this.router.navigate(['/login']);
          resolve(result)
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorMessage);
      })
    })

  }
}
