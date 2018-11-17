import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogledriveService } from '../services/googledrive.service';
import {MembershipType} from '../services/models/membershipTypes';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html'
})
export class MembershipComponent implements OnInit {
   membershipTypes: MembershipType[];
   payTypes: string[];
   selMType: string;
   selPType: string;
   constructor(private googledriveService: GoogledriveService) { }

  ngOnInit() {
    this.googledriveService.getMembershipTypes()
    .subscribe(res => {
      this.membershipTypes = res;
      this.selMType = this.membershipTypes[0].divid;
      this.selPType = 'Automatic Renewal';
      this.payTypes = ['Automatic Renewal', 'One-time Payment'];
    });
  }

  changeMembershipView(target: HTMLSelectElement) {
    this.selMType = target.value;
    this.selPType = 'Automatic Renewal';
  }

  payTypeChanged(target: HTMLSelectElement) {
    this.selPType = target.value;
  }

}
