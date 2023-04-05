import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkModeEnabled: boolean;
  public theme$: BehaviorSubject<string>;

  constructor() {
    // Check the OS preference for dark mode
    this.isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Check the cache for saved theme preference
    const cachedTheme = localStorage.getItem('theme');
    if (cachedTheme) {
      this.isDarkModeEnabled = cachedTheme === 'dark';
    }
    // Set the initial theme
    this.toggleTheme(this.isDarkModeEnabled);
    this.theme$ = new BehaviorSubject<string>(this.getTheme());
  }

  public toggleTheme(enabled: boolean) {
    // Toggle the dark mode class on the body element
    const body = document.getElementsByTagName('body')[0];
    if (enabled) {
      body.classList.add('tw-dark');
    } else {
      body.classList.remove('tw-dark');
    }
    // Toggle the theme flag and update the cache
    this.isDarkModeEnabled = enabled;
    localStorage.setItem('theme', enabled ? 'dark' : 'light');
    // Emit the new theme value
    if (this.theme$) {
      this.theme$.next(this.getTheme());
    }
  }

  public isDarkMode() {
    return this.isDarkModeEnabled;
  }

  public getTheme(): string {
    return this.isDarkModeEnabled ? 'dark' : 'light';
  }

  public getThemeChanged(): Observable<string> {
    return this.theme$.asObservable();
  }
}