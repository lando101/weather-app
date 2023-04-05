import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NextSevenDaysComponent } from 'src/components/weather-components/next-seven-days/next-seven-days.component';
import { Feature, Properties } from 'src/models/location-response.model';
import { WeatherService } from 'src/services/weather.service';
@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {
  lat: number;
  lon: number;
  location: Properties | null;
  weather: any;
  units: string = 'imperial'
  exclude: string[] = ['minutely','hourly','alerts'];
  json: string;
  routeSub: any;

  tabs = [
    {
      index: 0,
      title: 'Today',
      component: NextSevenDaysComponent
    },
    {
      index: 1,
      title: 'Tomorrow',
      component: ''
    },
    {
      index: 2,
      title: 'Next 7 Days',
      component: NextSevenDaysComponent
    }
  ];
  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    // const queryParams = this.route.snapshot.queryParams;
    // this.location = queryParams['location'] ? JSON.parse(queryParams['location']) : undefined;
    // this.lat = Number(queryParams['lat'] ?? undefined);
    // this.lon = Number(queryParams['lon'] ?? undefined);
    // console.log('lat', this.lat);
    // console.log('lon', this.lon);

    // this.getWeather();
    this.routeSub = this.route.queryParamMap.subscribe(params => {
      
      const lat = Number(params.get('lat'));
      const lon = Number(params.get('lon'));
      this.json = params.get('location') || '{}';
      const location = JSON.parse(params.get('location') || '{}');

      console.log('params', params);

      this.resetComponent(lat, lon, location);
    });
  } 

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  resetComponent(lat: number, lon: number, location: Properties) {
    this.location = location;
    this.lat = lat;
    this.lon = lon;
    this.getWeather();
  }

  getWeather() {
    let units = this.units;
    let exclude = this.exclude.join(',')
    this.weatherService.getWeather(this.lat, this.lon, '', units).subscribe(data => {
      this.weather = data;
      console.log('weather', this.weather)
    });
  }

}
