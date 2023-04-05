import { Component, OnInit } from '@angular/core';
import { User, UserInfo } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from 'src/auth/user.service';
import { AuthService } from 'src/services/Auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  email: string;
  password: string;

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
  }
  async onSubmit() {
    try{
      const user = await this.userService.signInEmail(this.email, this.password);
      console.log(user); // user object
      // localStorage.setItem('authToken', user.accessToken);
      this.router.navigate(['/home']);
    } catch (error){
      console.log(error)
    }
  }
}
