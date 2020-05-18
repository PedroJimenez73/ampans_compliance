import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';
import { Subscription } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-diapo6',
  templateUrl: './diapo6.component.html',
  styleUrls: ['./diapo6.component.scss']
})
export class Diapo6Component implements OnInit {

    @ViewChild('overlay', {static: true}) overlayRef: ElementRef;
    @ViewChild('close', {static: true}) closeRef: ElementRef;
    @ViewChild('modal', {static: true}) modalRef: ElementRef;

    subscripState: Subscription;
    readed = false;

    constructor(private scormStoreService: ScormStoreService) { }

    ngOnInit() {
        const scrollToTop = window.setInterval(() => {
        const pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); 
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
        this.subscripState = this.scormStoreService.state$
                        .subscribe(
                            (data: any) => {
                                if (data.progress[data.currentPantalla][1]) {
                                    this.readed = false;
                                } else {
                                    this.readed = true;
                                }
                            },
                            (error:any) => {console.log(error)
                        });
    }

    showModal() {
        this.overlayRef.nativeElement.classList.add('show')
        this.closeRef.nativeElement.classList.add('show')
        this.modalRef.nativeElement.classList.add('show')
    }

    closeModal() {
        this.overlayRef.nativeElement.classList.remove('show')
        this.closeRef.nativeElement.classList.remove('show')
        this.modalRef.nativeElement.classList.remove('show')
    }

    setReaded() {
        this.scormStoreService.readCodi();
        this.overlayRef.nativeElement.classList.remove('show')
        this.closeRef.nativeElement.classList.remove('show')
        this.modalRef.nativeElement.classList.remove('show')
    }
}
