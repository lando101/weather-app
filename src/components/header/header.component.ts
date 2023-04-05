import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feature, LocationResult, Properties } from 'src/models/location-response.model';
import { GeoLocation } from 'src/models/user-location.model';
import { LocationSearchService } from 'src/services/location-search.service';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean;
  currentLocation: GeoLocation | undefined;
  location: Properties;
  city?: string;
  state?: string;

  constructor(public themeService: ThemeService, private locationService: LocationSearchService, private router: Router,) { }

  ngOnInit() {
    this.themeService.theme$.subscribe((theme)=>{
      this.isDarkMode = (theme === 'dark') ? true:false;
    });

    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.currentLocation = position;
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          console.log('Current location:', this.currentLocation);
          this.locationService.getCurrentLocationData(lat, lon).subscribe(data => {
            console.log('data', data);
            this.location = data.results[0];
            this.city = this.location.city;
            this.state = this.location.state_code;
            
            console.log('user location', this.location);
          })
          // this.getWeather();
        },
        error => console.log('Error getting current location:', error)
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }


  search(){
    
  }

  goToWeatherDetails(location: Properties) {
    // this.getAutocompleteResults('');
    const lat: number | undefined = location.lat;
    const lon: number | undefined = location.lon;
    const queryParams = {
      lat: lat,
      lon: lon,
      location: JSON.stringify(location)
    };

    this.router.navigate(['/weather', location?.formatted], { queryParams: queryParams });
  }

  toggleDarkMode() {
    // this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme(this.isDarkMode);
    // this.themeService.setDarkMode(this.isDarkMode);
  }

}
