import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { LocalForm } from '../models/local';

import { NgForm } from '@angular/forms/src/directives/ng_form';

import { DataService } from '../services/data.service';

import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  LocalModel = new LocalForm();
  public respuestaImagenEnviada;
  public resultadoCarga;

  constructor(private _router: Router, private _dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.getSentServices(this.LocalModel, f);
  }

  getSentServices(body: LocalForm, f: NgForm) {
    var image = "";
    if (typeof sessionStorage.directionImage !== 'undefined') {
      image = sessionStorage.directionImage;
    }
    this._dataService.addUser(body, image).subscribe(res => {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('id', res.id);
      sessionStorage.image=res.image;
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
