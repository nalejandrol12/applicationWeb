import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  private email: string;
  private password: string;

  constructor(private _router: Router,
    private _dataService: DataService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onAdd() {
    this._dataService.addLogin(this.email, this.password).subscribe(res => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('id', res.id);
      sessionStorage.setItem('image', res.image);
      console.log(res.status);
      this._router.navigate(['/home']);
    }, err => {
      this.toastr.error('Algunos de los datos ingresados es incorrecto', 'Error', {
        timeOut: 3000
      });
    }
    );
  }
}
