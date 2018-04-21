import { Component, OnInit } from '@angular/core';
import { GoogledriveService } from '../services/googledrive.service';
import { Artifact } from '../services/models/artifact';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html'
})
export class NewsletterComponent implements OnInit {
  newsletter: Artifact[];
  constructor(private googledriveService: GoogledriveService) { }

  ngOnInit() {
    this.googledriveService.getNewsletters()
    .subscribe(res => {
      this.newsletter = res;
    });
  }
}
