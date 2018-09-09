import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _registerUrl = "http://localhost:3001/api/signupadmin";
  private _loginUrl = "http://localhost:3001/api/signinadmin";
  private _homeadminUrl = "http://localhost:3001/api/private";
  private _menuUrl = "http://localhost:3001/api/product/";

  constructor(private http: HttpClient) { }

  addLogin(course: string, course1: string) {
    const data = { email: course, password: course1 };
    return this.http.post<any>(this._loginUrl, data);
  }

  getMenu(){
    return this.http.get<any>(this._menuUrl+sessionStorage.getItem('id'));
  }

  addCourses(course: string, course1: string, course2: string, course3: string) {
    const data = { email: course, password: course1, displayName: course2, admin: course3 };
    return this.http.post<any>(this._registerUrl, data);
  }

  getHome() {
    return this.http.get<any>(this._homeadminUrl);
  }

  getToken() {
    return sessionStorage.getItem('token');
    //return localStorage.getItem('token')
  }

  getId() {
    return sessionStorage.getItem('id');
  }

  loggedIn() {
    return !!sessionStorage.getItem('token');
    //return !!localStorage.getItem('token')    
  }
}
