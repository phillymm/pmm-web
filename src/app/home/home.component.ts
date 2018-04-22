import { Component, OnInit } from '@angular/core';
import { GoogledriveService } from '../services/googledrive.service';
import { PMMEvent } from '../services/models/pmm-events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  pmmevent: PMMEvent[];
  constructor(private googledriveService: GoogledriveService) { }

  ngOnInit() {
    this.googledriveService.getEvents()
    .subscribe(res => {
      this.pmmevent = res;
    });
  }
}
