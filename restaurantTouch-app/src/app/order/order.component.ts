import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  private listOrder: any = [];

  constructor(private _dataService: DataService,
    private _router: Router) { }

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
    this.showOrder();
  }

  showOrder() {
    var idLocal = this._dataService.getId();
    this._dataService.getOrder(idLocal).subscribe(res => {
      this.listOrder = res;
      console.log(this.listOrder[0].idUser.length);
      console.log(this.listOrder);

    });
  }

  sendEmail(idLocal, idUser, value) {
    this._dataService.getEmail(idLocal, idUser, value).subscribe(res => {
      console.log(res.message);
    });
  }

}
