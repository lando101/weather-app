import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  isDarkMode: boolean;
  constructor(public router: Router, private themeService:ThemeService){
    this.themeService.theme$.subscribe((theme)=>{
      this.isDarkMode = (theme === 'dark') ? true:false;
    });
  }
}
