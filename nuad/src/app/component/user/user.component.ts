import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/service/event.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdata = {};
  FormProfile: FormGroup;
  tab1: String;
  tab2: String;
  tab3: String;
  tab4: String;
  disableName: boolean = true;
  disableCity1: boolean = true;
  disableCity2: boolean = true;
  disableTell: boolean = true;
  disableMail: boolean = true;
  disableLine: boolean = true;
  // disablName: boolean = true;

  constructor(private _authService: AuthService, private _route: Router, private buildForm: FormBuilder, private _eventService: EventService) {

  }

  ngOnInit() {
    this.tab1 = 'ข้อมูลผู้ใช้';
    this.tab2 = 'ประวัติการรักษา';
    this.tab3 = 'การนัดหมาย';
    this.tab4 = 'ความพึงพอใจ';
    this.getUser();
    // console.log('log user in on init',this.userdata);

  }

  getUser() {
    // let mailEnd = localStorage.getItem('mem_id');
    // let userMail = { 'mail': atob(mailEnd) };
    // console.log('log user mail',userMail);
      
          // console.log('---decode----',maildecode );
    let umaill = localStorage.getItem('mem_id');
    let maildecode = atob(umaill);
    let userMail = { 'mail': maildecode }
    // console.log(userMail);

    this._eventService.getUserData(userMail)
      .subscribe(
        res => {

          console.log('log res get user', res);

          if (res) {

            this.FormProfile = this.buildForm.group({
              Name: [{ value: res.name+' '+res.surname, disabled: this.disableName }, Validators.required],
              Locate1: [{ value: res.address1, disabled: this.disableCity1 }, Validators.required],
              Locate2: [{ value: res.address2, disabled: this.disableCity2 }, Validators.required],
              Tell: [{ value: res.tell, disabled: this.disableTell }, Validators.required],
              Mail: [{ value: res.umail, disabled: this.disableMail }, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
              Line: [{ value: res.lineId, disabled: this.disableLine }, Validators.required]
            });


            // this.userdata = res;
            // // this.FormProfile.controls['Mail'].value = this.userdata.uemail;  
            // console.log(this.userdata['uemail']);
            // this.FormProfile.controls['Mail'].setValue = this.userdata['uemail'];
          }
        },
        err => {
          console.log(err)
        }
      );
  }
  EditName() {
    // console.log('edit name');
    // console.log(this.disable);

    // console.log(this.FormProfile.controls['Name'].disable());
    // console.log('disable true', this.FormProfile.controls['Name'].disabled);
    // if (this.FormProfile.controls['Name'].disabled) {
    //   this.FormProfile.controls['Name'].enable();
    //   console.log('disable false', this.FormProfile.controls['Name'].disabled);
    // }
    // this.FormProfile.controls['Name'].disable();
    // setTimeout(() => {
    if (this.disableName) {
      this.FormProfile.controls.Name.enable();
      this.disableName = false;
    } else {
      this.FormProfile.controls.Name.disable();
    }
    // }, 5000);
  }

  EditCity1() {
    console.log('edit city1');

    if (this.disableCity1) {
      this.FormProfile.controls.Locate1.enable();
      this.disableCity1 = false;
    } else {
      this.FormProfile.controls.Locate1.disable();
    }

  }
  EditCity2() {
    console.log('edit city2');

    if (this.disableCity2) {
      this.FormProfile.controls.Locate2.enable();
      this.disableCity2 = false;
    } else {
      this.FormProfile.controls.Locate2.disable();
    }
  }
  EditTell() {
    console.log('edit tell');

    if (this.disableTell) {
      this.FormProfile.controls.Tell.enable();
      this.disableTell = false;
    } else {
      this.FormProfile.controls.Tell.disable();
    }
  }
  EditMail() {
    console.log('edit mail');

    if (this.disableMail) {
      this.FormProfile.controls.Mail.enable();
      this.disableMail = false;
    } else {
      this.FormProfile.controls.Mail.disable();
    }
  }
  EditLine() {
    console.log('edit line');

    if (this.disableLine) {
      this.FormProfile.controls.Line.enable();
      this.disableLine = false;
    } else {
      this.FormProfile.controls.Line.disable();
    }
  }

  OnSubmit() {
    // this.FormProfile.controls['Name'].disable();
    let formdata = this.FormProfile.value;
    this._eventService.updateUser(formdata).subscribe( 
      res => {
console.log('data updated',res);

      },
      err =>{
        console.log('errr ',err);
        

      })
    // console.log(formdata);
    
// console.log('form data');

  }

}
