import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentModule } from 'src/components/components.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, WeatherDetailsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ComponentModule],
  exports: [FormsModule, ReactiveFormsModule, RouterModule],
})
export class SharedModule {}