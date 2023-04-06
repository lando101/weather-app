import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationSearchService {
lat: number;
lon: number;
constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

getAutocompleteResults(query: string): Observable<any> {
  let url: string = `${this.baseUrl}/location/query/{query}?text=${query}`;
  if(query){
    if(this.lat && this.lon){ // proximity search
      url = `${url}&lat=${this.lat}&lon=${this.lon}`;
    } else { // general search
      url = url;
    }
    return this.http.get(url);
  } else {
    return of()
  }
}

  // getAutocompleteResults(query$: Observable<string>, lat?: number, lon?: number): Observable<any> {
  //   return query$.pipe(
  //     debounceTime(500), // Wait 500ms between API calls
  //     distinctUntilChanged(), // Only make API calls when the query changes
  //     switchMap((query: string) => {
  //       let url: string = `${this.baseUrl}/location/query/{query}?text=${query}`;
  //       if (lat && lon) {
  //         url = `${url}&lat=${this.lat}&lon=${this.lon}`;
  //       }
  //       return query ? this.http.get(url) : of([]); // Return an empty array if the query is empty
  //     })
  //   );
  // }

  getCurrentLocationData(lat: number, lon: number): Observable<any> {
    if (lat && lon){
      this.lat = lat;
      this.lon = lon;
      const url = `${this.baseUrl}/location/coord/${lat}/${lon}`;
      const httpGet = this.http.get(url);
      
      return httpGet;
    } else {
      return of();
    }
  }
}
