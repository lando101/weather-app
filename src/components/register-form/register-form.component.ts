import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/auth/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;
  user: User;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      homeCity: ['', Validators.required],
    });
  }
  // Define a password property to bind to the form control
  get password() {
    return this.registerForm.get('password');
  }
  async onSubmit() {
    // Submit registration form
    if(this.registerForm.valid){
      this.user = {
        id: null,
        first_name: this.registerForm.value.firstName,
        last_name: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        home_city: this.registerForm.value.homeCity,
        previousSearches: [],
        favoriteLocations: [],
        alerts: []
      }
    }

    try {
      const user = await this.userService.signUpEmail(this.user);
      console.log(user); // User object
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error); // Error message
    }
  }

}
