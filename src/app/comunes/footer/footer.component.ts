import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    pantallaIndex = 0;
    total = 0
    item: any;
    showNext = true;

    subscripState: Subscription;
    results = [];
    totalAciertos = 0;
    porcentAciertos: number;

    constructor(private scormStoreService: ScormStoreService) { }

    ngOnInit() {
        this.total = this.scormStoreService.getInitialState() - 1;
        this.subscripState = this.scormStoreService.state$
                                .subscribe(
                                    (data: any) => {
                                        this.pantallaIndex = data.currentPantalla;
                                        if (data.progress[data.currentPantalla][1]) {
                                            this.showNext = false;
                                        } else {
                                            this.showNext = true;
                                        }
                                    },
                                    (error:any) => {console.log(error)
                                });
    }

    prevPantalla() {
        this.scormStoreService.prevPantalla()
    }

    nextPantalla() {
        if(this.pantallaIndex === 12) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 0; i < 4; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 80) {
                this.scormStoreService.passUnit1();
            }
        }
        if(this.pantallaIndex === 24) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 4; i < 15; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 80) {
                this.scormStoreService.passUnit2();
            }
        }
        if(this.pantallaIndex === 34) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 15; i < 24; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 80) {
                this.scormStoreService.passUnit3();
            }
        }
        if(this.pantallaIndex === 43) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 24; i < 32; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 80) {
                this.scormStoreService.passUnit4();
            }
        }
        if(this.pantallaIndex === 49) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 32; i < 37; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 80) {
                this.scormStoreService.passUnit5();
            }
        }
        if(this.pantallaIndex === 54) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 37; i < 41; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 80) {
                this.scormStoreService.passUnit6();
            }
        }
        if(this.pantallaIndex === 65) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 41; i < 51; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 80) {
                this.scormStoreService.passUnit7();
            }
        }
        if(this.pantallaIndex === 72) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 51; i < 57; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 80) {
                this.scormStoreService.passUnit8();
            }
        }
        if(this.pantallaIndex === 77) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 57; i < 61; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 80) {
                this.scormStoreService.passUnit9();
            }
        }
        if(this.pantallaIndex === 82) {
            this.results = [];
            this.totalAciertos = 0;
            for (let i = 61; i < 65; i ++) {
                this.results.push(this.scormStoreService.getResults()[i].result)
            }
            this.results.forEach(elem => {
                if(elem) {
                    this.totalAciertos++;
                }
            });
            this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
            if(this.porcentAciertos >= 80) {
                this.scormStoreService.passUnit10();
            }
        }
        this.scormStoreService.nextPantalla()
    }

    exit() {
        this.scormStoreService.exit();
    }

}
