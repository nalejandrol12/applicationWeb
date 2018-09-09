import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(private _router: Router,
    private _dataService: DataService) { }

  ngOnInit() {
  }

  onAdd() {
    this._dataService.addLogin(this.email, this.password).subscribe(res => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('id', res.id);
      //localStorage.setItem('token', res.token)
      this._router.navigate(['/home']);
    },
      err => console.log(err));
  }
}
