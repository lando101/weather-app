import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentModule } from 'src/components/components.module';
import { SharedModule } from 'src/pages/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from 'src/services/theme.service';
import { environment } from 'src/environment';


const firebaseConfig = {
  apiKey: "AIzaSyA4JaWjyO3Vgm0dvaQ5YeCcaqyol7iyqqc",
  authDomain: "weather-app-4d9b4.firebaseapp.com",
  projectId: "weather-app-4d9b4",
  storageBucket: "weather-app-4d9b4.appspot.com",
  messagingSenderId: "408362605578",
  appId: "1:408362605578:web:247e54a7bcaf57d61713f3",
  measurementId: "G-W8JRXZRV0R"
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    ComponentModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    MaterialModule,
    // NgbModule
  ],
  providers: [ThemeService, { provide: 'BASE_URL', useValue: environment.apiUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
