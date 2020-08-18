import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-pdf-viewer',
  template: `
  <pdf-viewer src="assets/pdf/view.pdf" 
              [render-text]="true"
              style="display: block;"
              [original-size]="false"
  ></pdf-viewer>`
})
export class CommonPdfViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
