import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SigninComponent } from '../../component/signin/signin.component';
import { SignupComponent } from '../../component/signup/signup.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  @Input() public myInputVariable: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );


  constructor(private breakpointObserver: BreakpointObserver, public OpenDialog: MatDialog, private _authService: AuthService) { }

  openSigninDialog() {
    this.OpenDialog.open(SigninComponent);
  }

  openSignupDialog() {
    this.OpenDialog.open(SignupComponent);
  }
  OnSelectUser() {
    console.log('user');
    localStorage.setItem('type', 'user');
  }
  OnSelectClinic() {
    console.log('clinic');
    
    localStorage.setItem('type', 'clinic');
  }


}
