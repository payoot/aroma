import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EventsComponent } from './component/events/events.component';
import { SpecialEventsComponent } from './component/special-events/special-events.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { AuthGuard } from './service/auth.guard';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserTypeComponent } from './component/user-type/user-type.component';
import { UserComponent } from './component/user/user.component';
import { ClinicComponent } from './component/clinic/clinic.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // {
  //   path: 'signin',
  //   component: SigninComponent
  // },
  // {
  //   path: 'signup',
  //   component: SignupComponent
  // },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'event',
    component: EventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'specailEvent',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'type',
    component: UserTypeComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clinic',
    component: ClinicComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
