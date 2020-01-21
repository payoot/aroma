import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';


@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {
  user_data = [];
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents()
    .subscribe(
      res => this.user_data = res,
      err => console.log(err)
    );
  }
  OnSelectUser() {
    localStorage.setItem('type', 'user');
  }
  OnSelectClinic() {
    localStorage.setItem('type', 'clinic');
  }

}
