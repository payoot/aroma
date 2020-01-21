import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogRef,MatDialog } from '@angular/material/dialog';

import { AuthService } from './service/auth.service';
import { EventService } from './service/event.service';
import { AuthGuard } from './service/auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';


import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { EventsComponent } from './component/events/events.component';
import { SpecialEventsComponent } from './component/special-events/special-events.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserTypeComponent } from './component/user-type/user-type.component';
import { UserComponent } from './component/user/user.component';
import { ClinicComponent } from './component/clinic/clinic.component';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    MainNavComponent,
    SignupComponent,
    EventsComponent,
    SpecialEventsComponent,
    DashboardComponent,
    UserTypeComponent,
    UserComponent,
    ClinicComponent
  ],
  entryComponents: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, EventService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
