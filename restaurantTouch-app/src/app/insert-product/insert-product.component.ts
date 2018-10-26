import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductForm } from '../models/product';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent implements OnInit {

  private direc = sessionStorage.image;
  ProductModel = new ProductForm();
  public respuestaImagenEnviada;
  public resultadoCarga;

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
    )
  }

  onSubmit(f: NgForm) {
    this.getSentServices(this.ProductModel, f);
  }

  getSentServices(body: ProductForm, f: NgForm) {
    var image = "";
    if (typeof sessionStorage.directionImage !== 'undefined') {
      image = sessionStorage.directionImage;
    }
    this._dataService.addMenu(body, image, sessionStorage.id).subscribe(res => {
      this.toastr.success('Se guardo el producto con éxito', 'Elemento guardado', {
        timeOut: 3000
      });
      if (typeof sessionStorage.directionImage !== 'undefined') {
        sessionStorage.removeItem('directionImage');
      }
      this._router.navigate(['/home']);
    }, err => {
      console.log(err);
    })
  }

  public cargandoImagen(files: FileList) {

    if (typeof sessionStorage.directionImage !== 'undefined') {
      this._dataService.deleteImage(sessionStorage.directionImage).subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
    }

    this._dataService.sendImage(files[0]).subscribe(response => {
      sessionStorage.directionImage = response.data;
      this.respuestaImagenEnviada = response;
      if (this.respuestaImagenEnviada <= 1) {
        console.log("Error en el servidor");
      } else {

        if (this.respuestaImagenEnviada.code == 200 && this.respuestaImagenEnviada.status == "success") {

          this.resultadoCarga = 1;

        } else {
          this.resultadoCarga = 2;
        }

      }
    },
      error => {
        console.log(<any>error);
      });
  }

}
