import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  dataToggleSet = false;
  constructor() { }

  ngOnInit() {
   this.dataToggleSet = (window.innerWidth < 990);
  }
}
