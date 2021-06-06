import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-logoSloganComp2021',
  templateUrl: './logoSloganComp2021.component.html'
})
export class LogoSloganComp2021Component implements OnInit {
  constructor(private http: Http) { }
  ngOnInit() {
  }
}