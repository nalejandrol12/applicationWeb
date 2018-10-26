import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private details = JSON.parse(sessionStorage.information);

  constructor(private _router: Router, private _dataService: DataService) { }

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
  }

  onBack() {
    sessionStorage.removeItem('information')
    if (!sessionStorage.information) {
      this._router.navigate(['/home']);
    }
  }

}
