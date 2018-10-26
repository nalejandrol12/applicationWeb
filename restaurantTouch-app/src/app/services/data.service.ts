import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalForm } from '../models/local';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _registerUrl = "http://localhost:3001/api/signupadmin";
  private _loginUrl = "https://app-restaurante.herokuapp.com/api/signinadmin";
  private _homeadminUrl = "https://app-restaurante.herokuapp.com/api/private";
  private _menuUrl = "https://app-restaurante.herokuapp.com/api/product/";
  private _orderUrl = "https://app-restaurante.herokuapp.com/api/showOrder";
  private _emailUrl = "https://app-restaurante.herokuapp.com/api/email";
  private _sendImageUrl = "http://localhost:3001/api/saveImage";
  private _deleteImageUrl = "http://localhost:3001/api/deleteImage";

  constructor(private http: HttpClient) { }

  addLogin(course: string, course1: string) {
    const data = { email: course, password: course1 };
    return this.http.post<any>(this._loginUrl, data);
  }

  addUser(_body: LocalForm, course: string) {
    const data = { _body: _body, image: course };
    return this.http.post<any>(this._registerUrl, data);
  }

  getMenu() {
    return this.http.get<any>(this._menuUrl + sessionStorage.getItem('id'));
  }

  addCourses(course: string, course1: string, course2: string, course3: string) {
    const data = { email: course, password: course1, displayName: course2, admin: course3 };
    return this.http.post<any>(this._registerUrl, data);
  }

  getHome() {
    return this.http.get<any>(this._homeadminUrl);
  }

  getOrder(course: string) {
    const data = { id_local: course };
    return this.http.post<any>(this._orderUrl, data);
  }

  getEmail(course: string, course2: string, course3: number) {
    const data = { id_local: course, id_user: course2, value: course3 };
    return this.http.post<any>(this._emailUrl, data);
  }

  sendImage(imagenParaSubir: File) {
    const formData = new FormData();
    formData.append('name', imagenParaSubir, imagenParaSubir.name);
    return this.http.post<any>(this._sendImageUrl, formData);
  }

  deleteImage(course: string) {
    const data = { name: course };
    return this.http.post<any>(this._deleteImageUrl, data);
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
