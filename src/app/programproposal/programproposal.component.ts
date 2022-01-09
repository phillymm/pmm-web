import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-programproposal',
  templateUrl: './programproposal.component.html'
})
export class ProgramProposalComponent implements OnInit {
  constructor(private http: Http) { }
  ngOnInit() {
  }
}