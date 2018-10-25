import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { LocalForm } from '../models/local';

import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  LocalModel = new LocalForm();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.getSentServices(this.LocalModel, f);
  }

  getSentServices(body: LocalForm, f: NgForm) {

    console.log(body)
  }
}
