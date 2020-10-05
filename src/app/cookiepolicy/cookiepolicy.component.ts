import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './cookiepolicy.component.html'
})
export class CookiePolicyComponent implements OnInit {
  constructor(private http: Http) { }

  ngOnInit() {
  }
}
