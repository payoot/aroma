import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public route: string;
  hide = true;
  FormSignin: FormGroup;
  constructor(
    private BuildForm: FormBuilder, 
    private _auth: AuthService, 
    private _router: Router,
    public dialogRef: MatDialogRef<SigninComponent>
    ) { }

  ngOnInit() {
    
      this.FormSignin = this.BuildForm.group({
      umail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  OnSubmit() {
    if (this.FormSignin.valid) {
      console.log(this.FormSignin.value);
      this._auth.signinUser(this.FormSignin.value).subscribe(
        res => {
          let umail = res.user.uemail;
          let mailHash = btoa(umail);
          // console.log('success', res.user.uemail);
          console.log('---endcode----',mailHash);
          localStorage.setItem('mem_id', mailHash);
          localStorage.setItem('token', res.token);
          // localStorage.setItem('mecode', mailHash);
          // let maildecode = atob(mailHash);
          // console.log('---decode----',maildecode );
          this._router.navigate(['/type'])
          this.dialogRef.close()
        },
        err => console.log('error', err)
      );
    }
  }
  
}
