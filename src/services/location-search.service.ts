import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationSearchService {

constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getAutocompleteResults(query: string): Observable<any> {
    if(query){
      const url = `${this.baseUrl}/location/query/{query}?text=${query.replace(/ /g, '%20')}`;
      return this.http.get(url);
    } else {
      return of()
    }
  }

  getCurrentLocationData(lat: number, lon: number): Observable<any> {
    if (lat && lon){
      const url = `${this.baseUrl}/location/coord/${lat}/${lon}`;
      return this.http.get(url);
    } else {
      return of();
    }
  }
}
