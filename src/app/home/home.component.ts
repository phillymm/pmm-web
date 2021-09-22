import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { GoogledriveService } from '../services/googledrive.service';
import { PMMEvent } from '../services/models/pmm-events';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeurl'
})
export class SafeurlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  pmmPastEvent: PMMEvent[];
  pmmFutureEvent: PMMEvent[];

  constructor(private googledriveService: GoogledriveService) { }

  ngOnInit() {
    this.googledriveService.getEvents()
    .subscribe(res => {
      const pastMatches = res.filter(f => this.compareDate(f.Date, new Date()) < 0);
      const futureMatches = res.filter(f =>  this.compareDate(f.Date, new Date()) >= 0);

      this.pmmPastEvent = pastMatches;
      this.pmmFutureEvent = futureMatches;
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
