import { Component, OnInit } from '@angular/core';
import { GoogledriveService } from '../services/googledrive.service';
import { MerchandiseItem } from '../services/models/merchandise';


@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {
  merchandiseItems: MerchandiseItem[];
  constructor(private googledriveService: GoogledriveService) { }

  ngOnInit() {
    this.googledriveService.getMerchandiseItems()
    .subscribe(res => {
      this.merchandiseItems = res;
    });
  }

}
