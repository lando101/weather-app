import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LocationSearchService } from 'src/services/location-search.service';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, take } from 'rxjs/operators';
import { Feature, GeoapifyResponse, Properties } from 'src/models/location-response.model';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss'],
  animations: [trigger('floatAnimation', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(10px)'
      }),
      animate('225ms ease-out', style({
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ]),
    transition(':leave', [
      animate('150ms ease-in', style({
        opacity: 0,
        transform: 'translateY(20px)'
      }))
    ])
  ])]
})
export class LocationSearchComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  @Input() isDarkMode: boolean;
  
  searchTerm: string;
  autocompleteResults: Feature[] = [];
  previousResponse: any = null;
  isLoading: boolean = false;
  constructor(private router: Router, private locationSearch: LocationSearchService) {

  }

  ngOnInit() {
    this.router.events.subscribe((data)=>{
      this.input.nativeElement.value = '';
      this.getAutocompleteResults('');
    });

      // Add event listener for keydown events on the document to close results on Esc key press
  const handleDocumentKeyDown = (e: KeyboardEvent) => {
    if (e.keyCode === 27) { // Esc key
      this.autocompleteResults = [];
    }
  };
  document.addEventListener('keydown', handleDocumentKeyDown);
  }

  getAutocompleteResults(query: string): void {
    if (query.length > 3) {
      const input$ = fromEvent(this.input.nativeElement, 'keyup');
      input$
        .pipe(
          distinctUntilChanged(),
          filter((value: any) => value.target.value.length % 2 === 0),
          switchMap((event: any) => {
            this.isLoading = true; // Set isLoading to true before API call
            return this.locationSearch.getAutocompleteResults(event.target.value);
          })        )
        .subscribe(
          (response: any) => {
            if (JSON.stringify(response) !== JSON.stringify(this.previousResponse)) {
              this.autocompleteResults = response.features;
              console.log('autocomplete results', this.autocompleteResults);
              this.previousResponse = response;
            }
            this.isLoading = false; // Set isLoading to false once API call completes
          },
          (error: any) => {
            console.error(error);
            this.isLoading = false; // Set isLoading to false on error as well
          }
        );
        this.isLoading = false; // Set isLoading to false on error as well
    } else {
      this.autocompleteResults = [];
      this.isLoading = false; // Set isLoading to false on error as well
    }
  }



  goToWeatherDetails(location: Feature) {
    this.getAutocompleteResults('');
    const lat: number | undefined = location.geometry?.coordinates?.[1];
    const lon: number | undefined = location.geometry?.coordinates?.[0];
    const queryParams = {
      lat: lat,
      lon: lon,
      location: JSON.stringify(location.properties)
    };

    this.router.navigate(['/weather', location?.properties?.formatted], { queryParams: queryParams });
  }

}

