import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-pmmconnect',
  templateUrl: './pmmconnect.component.html'
})
export class PmmConnectComponent implements OnInit {
  constructor(private http: Http) { }
  ngOnInit() {
  }
}
