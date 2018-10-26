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

  onDelete(details){
    this._dataService.deleteMenu(details._id,details.image).subscribe(res => {
      this.toastr.success(res.message, 'Se elimino con éxito', {
        timeOut: 3000
      });
    }, err => {
      this.toastr.error(err, 'Ocurrio un error y no se pudo eliminar', {
        timeOut: 3000
      });
    });
  }

}
