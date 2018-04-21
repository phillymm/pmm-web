import { Component, OnInit } from '@angular/core';
import { GoogledriveService } from '../services/googledrive.service';
import { Committee } from '../services/models/committee';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html'
})
export class CommitteeComponent implements OnInit {
  committee: Committee[];
  constructor(private googledriveService: GoogledriveService) { }

  ngOnInit() {
    this.googledriveService.getCommittee()
    .subscribe(res => {
      this.committee = res;
    });
  }
}
