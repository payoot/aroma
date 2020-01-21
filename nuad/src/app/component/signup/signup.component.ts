import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../shared/user-name.validator';
import { PasswordValidator } from '../../shared/password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  regisForm: FormGroup;
  registerUserData = {};
  hide = true;
  get userName() {
    return this.regisForm.get('username');
  }
  get uMail() {
    return this.regisForm.get('umail');
  }
  patternemail: string;
  constructor(private _auth: AuthService, private BuildForm: FormBuilder, private _router: Router) {}

  ngOnInit() {
    this.regisForm = this.BuildForm.group({
      username: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/)]],
      umail: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]]
    }, { validators: PasswordValidator });
  }
  OnSubmit() {
    if (this.regisForm.valid) {
      this._auth.registerUer(this.regisForm.value).subscribe(
        res => {
          console.log('success',res)
          let umail = res.memberUser.umail;
          let mailHash = btoa(umail);
          localStorage.setItem('token', res.token)
          localStorage.setItem('mem_id', mailHash)
          this._router.navigate(['/type'])
          
        },
        err => console.log('error', err)
      );
    }
  }
}
