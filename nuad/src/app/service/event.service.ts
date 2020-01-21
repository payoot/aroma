import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = 'http://127.0.0.1:3000/api/events';
  private _specialEventsUrl = 'http://127.0.0.1:3000/api/special';
  private _userDataUrl = 'http://127.0.0.1:3000/api/user_data';
  private _user_updateDataUrl = 'http://127.0.0.1:3000/api/user/update';

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }
  // signinUser(user) {
  //   return this.http.post<any>(this._signinUrl, user);
  // }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }

  getUserData(userMail) {
    return this.http.post<any>(this._userDataUrl,userMail)
  }

  updateUser(dataUpdate) {
    return this.http.post<any>(this._user_updateDataUrl,dataUpdate)
  }
  // registerUer(user) {
  //   return this.http.post<any>(this._registerUrl, user);

  // }
}
