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
  pmmevent: PMMEvent[];
  constructor(private googledriveService: GoogledriveService) { }

  ngOnInit() {
    this.googledriveService.getEvents()
    .subscribe(res => {
      this.pmmevent = res;
    });
  }
}
