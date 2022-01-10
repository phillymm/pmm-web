import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-pmm50',
  templateUrl: './pmm50.component.html'
})
export class Pmm50Component implements OnInit {
  constructor(private http: Http) { }
  ngOnInit() {
  }
}