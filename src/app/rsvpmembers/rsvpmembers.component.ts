import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';


@Component({
  selector: 'app-rsvpmembers',
  templateUrl: './rsvpmembers.component.html'
})
export class RsvpMembersComponent implements OnInit {
  msg:string;
  NonMemberFee: number;
  PaypalLink:string;
  constructor(private http: Http) { }
  ngOnInit() {
  }
}