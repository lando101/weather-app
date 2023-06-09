import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from 'src/components/login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HeaderComponent } from './header/header.component';
// import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/material.module';
import { IconsModule } from 'src/app/icons.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';
import { LocationSearchComponent } from './location-search/location-search.component';
import { PrimeNgModule } from 'src/app/primeng.module';
import { WeatherTabsComponent } from './weather-tabs/weather-tabs.component';
import { NextSevenDaysComponent } from './weather-components/next-seven-days/next-seven-days.component';
import { TextHighlightDirective } from 'src/directives/text-highlight.directive';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { WeatherCarouselComponent } from './weather-components/weather-carousel/weather-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NgxSplideModule } from 'ngx-splide';
import { FavoritesComponent } from './favorites/favorites.component';
import { LargeCitiesComponent } from './large-cities/large-cities.component';
import { WeatherLargeComponent } from './weather-components/weather-large/weather-large.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    LocationSearchComponent,
    WeatherTabsComponent,
    NextSevenDaysComponent,
    TextHighlightDirective,
    DarkModeToggleComponent,
    WeatherCarouselComponent,
    FavoritesComponent,
    LargeCitiesComponent,
    WeatherLargeComponent
  ],
  imports: [
    GeoapifyGeocoderAutocompleteModule.withConfig(
      'e4a92273b563419fa39f405d84705114'
    ),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // NgbModule,
    MaterialModule,
    IconsModule,
    FlexLayoutModule,
    PrimeNgModule,
    CarouselModule,
    SlickCarouselModule,
    DragScrollModule,
    NgxSplideModule,
    // NgbDropdownModule,
  ],
  exports: [
    HeaderComponent,
    RegisterFormComponent,
    LoginFormComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    LocationSearchComponent,
    WeatherTabsComponent,
    NextSevenDaysComponent,
    DarkModeToggleComponent,
    WeatherCarouselComponent,
    FavoritesComponent,
    LargeCitiesComponent,
    WeatherLargeComponent
    // NgbDropdownModule,
  ],
})
export class ComponentModule {}
