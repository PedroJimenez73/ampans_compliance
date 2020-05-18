import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo4',
  templateUrl: './diapo4.component.html',
  styleUrls: ['./diapo4.component.scss']
})
export class Diapo4Component implements OnInit {

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
