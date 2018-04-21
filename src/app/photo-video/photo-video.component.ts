import { Component, OnInit } from '@angular/core';
import { GoogledriveService } from '../services/googledrive.service';
import { Artifact } from '../services/models/artifact';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-photo-video',
  templateUrl: './photo-video.component.html',
  styleUrls: ['./photo-video.component.css']
})
export class PhotoVideoComponent implements OnInit {
  photo: Artifact[];
  constructor(private googledriveService: GoogledriveService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.googledriveService.getPhotos()
    .subscribe(res => {
      this.photo = res;
    });
  }
}
