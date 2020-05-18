import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo5',
  templateUrl: './diapo5.component.html',
  styleUrls: ['./diapo5.component.scss']
})
export class Diapo5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const scrollToTop = window.setInterval(() => {
    const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); 
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
  }


}
