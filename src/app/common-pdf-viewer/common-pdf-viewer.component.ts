import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-pdf-viewer',
  templateUrl: './common-pdf-viewer.component.html'
})

export class CommonPdfViewerComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    
  }
    public doc: Array<string> =
    [
     "assets/pdf/view.pdf",
     "assets/pdf/view.pdf",
     "assets/pdf/view.pdf",
     "assets/pdf/view.pdf"
    ];

}

export class ForLoop {
  fakeArray = new Array(3);
}
