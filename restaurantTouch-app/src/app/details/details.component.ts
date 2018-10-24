import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private details = JSON.parse(sessionStorage.information);

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onBack() {
    sessionStorage.removeItem('information')
    if (!sessionStorage.information) {
      this._router.navigate(['/home']);
    }
  }

}
