import { InterceptorService } from './interceptor.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';

import { HeroSearchComponent } from './hero-search/hero-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";


import {  MatStepperModule } from "@angular/material/stepper";
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SearchPipe } from './messages/search.pipe';



import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { DaterrPipe } from './messages/daterr.pipe';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationComponent } from './verification/verification.component';
import { RepasswordComponent } from './repassword/repassword.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';


import {MatDatepickerModule} from '@angular/material/datepicker';

import { DialogForAddingComponent } from './dialog-for-adding/dialog-for-adding.component';
import { DialogForDeletingComponent } from './dialog-for-deleting/dialog-for-deleting.component';
import { DialogForExistingComponent } from './dialog-for-existing/dialog-for-existing.component';












@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    FirstCompComponent,
    SearchPipe,
    DaterrPipe,
    LoginComponent,
    SignupComponent,
    VerificationComponent,
    RepasswordComponent,
    UsersComponent,
    UserDetailComponent,
    DialogForAddingComponent,
    DialogForDeletingComponent,
    DialogForExistingComponent 

  ],
  entryComponents:[DialogForAddingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
      
    ),
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    ReactiveFormsModule,
    MatStepperModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDatepickerModule
    
  ],
  providers: [ {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }


