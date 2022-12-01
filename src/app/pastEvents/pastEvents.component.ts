import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { GoogledriveService } from '../services/googledrive.service';
import { PMMEvent } from '../services/models/pmm-events';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-pastEvents',
  templateUrl: './pastEvents.component.html'
})
export class PastEventsComponent implements OnInit {
  pmmPastEvent2: PMMEvent[];
  constructor(private googledriveService: GoogledriveService) { }

  ngOnInit() {
    this.googledriveService.getEvents()
    .subscribe(res => {
      const pastMatches = res.filter(f => this.compareDate(f.Date, new Date()) < 0);
      this.pmmPastEvent2 = pastMatches;
      console.log('asa');
      console.log('pmmPastEvents variable');
      console.log(this.pmmPastEvent2);
      console.log('pmmPastEvents variable length');
      console.log(this.pmmPastEvent2[0].Venue.length);

    });
  }

  compareDate(d1: Date, d2: Date): number {
    if (d1 === undefined || d2 === undefined) {
      return undefined;
    }
   const d3 = new Date(d1);
    return d3.getTime() - d2.getTime();
  }  
}