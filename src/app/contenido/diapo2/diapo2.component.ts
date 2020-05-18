import { Component, OnInit } from '@angular/core';

declare var window: any;
declare var $: any;


@Component({
  selector: 'app-diapo2',
  templateUrl: './diapo2.component.html',
  styleUrls: ['./diapo2.component.scss']
})
export class Diapo2Component implements OnInit {

    anterior = ""

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

    acordeon(id){
        let content=$(id+' .content');

        if((this.anterior!=id) && (this.anterior!="")&& ($(this.anterior+" .content").css("display"))!="none") {
            $(this.anterior+" .content").slideToggle(500);      
            $(this.anterior+" .mas").toggleClass('mostrada')     
            $(this.anterior+" .menos").toggleClass('mostrada')     
            $(this.anterior).toggleClass('borde')     
        }

        $(content).slideToggle(500);
        $(id+" .menos").toggleClass('mostrada');    
        $(id+" .mas").toggleClass('mostrada');
        $(id).toggleClass('borde');     
        this.anterior=id;
    }  

}
