import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

getWeather(lat: number, lon: number, exclude: string, units: string): Observable<any> {
  if(lat && lon){
    const url = `${this.baseUrl}/weather/${lat}/${lon}?exclude=${exclude}&units=${units}`;
    return this.http.get(url);
  } else {
    return of()
  }
}

}
