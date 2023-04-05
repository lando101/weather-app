import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Auth, User, user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;
  token: any;

  constructor(private router: Router) {
    this.userSubscription = this.user$.subscribe((aUser: User | null)=>{
      this.token = aUser?.getIdToken();
    })
  }

  canActivate(): boolean {

    // uncomment when deploy or to test auth
    // if (this.token) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }

    return true;
  }
  
}
