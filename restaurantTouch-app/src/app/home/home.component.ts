import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private listHistory: any = [];

  constructor(private _dataService: DataService,
    private _router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this._dataService.getHome().subscribe(
      res => console.log(res.status),
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/signin'])
          }
        }
      }
    );
    this.onGet();
  }

  onGet() {
    this._dataService.getMenu().subscribe(
      res => {
        this.listHistory = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  onView(details){
    sessionStorage.information = JSON.stringify(details);
    if(sessionStorage.information){
      this._router.navigate(['/details']);
    } else {
      this.toastr.error('Error con el servidor', 'Error', {
        timeOut: 3000
      });
      this._router.navigate(['/home']);
    }
  }

}
