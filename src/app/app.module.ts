import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { FirstnameComponent } from './form-input/firstname/firstname.component';
import { SurnameComponent } from './form-input/surname/surname.component';
import { WelcomeComponent } from './external-user/welcome/welcome.component';
import { PersonalInformationComponent } from './external-user/personal-information/personal-information.component';
import { BirthdayComponent } from './form-input/birthdate/birthday.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AddressComponent } from './form-input/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ToolbarComponent,
    FirstnameComponent,
    SurnameComponent,
    PersonalInformationComponent,
    BirthdayComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ReactiveFormsModule,
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
