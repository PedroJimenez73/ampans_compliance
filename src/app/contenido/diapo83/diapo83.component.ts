import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

@Component({
  selector: 'app-diapo83',
  templateUrl: './diapo83.component.html',
  styleUrls: ['./diapo83.component.scss']
})
export class Diapo83Component implements OnInit {

    results = [];
    totalAciertos = 0;
    porcentAciertos = 0;
    doughnutChartLabels: Label[];
    doughnutChartData: MultiDataSet;
    doughnutChartType: ChartType = 'doughnut';
    doughnutChartOptions: ChartOptions = {
        responsive: true,
        legend: {
        display: false
        },
    }
    doughnutChartColors = [];
    mensaje: string;
    pass = false;

    
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
        for (let i = 0; i < 65; i ++) {
            this.results.push(this.scormStoreService.getResults()[i].result)
        }
        this.results.forEach(elem => {
            if(elem) {
                this.totalAciertos++;
            }
        });
        this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
        this.loadChartResultados();
        if (this.totalAciertos < (this.results.length * 0.8)) {
			this.pass = false;
            this.mensaje = 'Ho sentim, no has superat les activitats. Pots prémer en repassar per estudiar de nou i tornar a contestar les preguntes o prémer en sortir per finalitzar.';
		} else if (this.totalAciertos >= (this.results.length * 0.8)) {
            this.pass = true;
			this.mensaje = 'Enhorabona, has superat les activitats! Prem sortir per finalitzar.';
		}
    }
    
    loadChartResultados() {
        let resto = 100 - this.porcentAciertos;
        let color;
        if(this.porcentAciertos >= 80){
            color = '#008489';
        } else if (this.porcentAciertos >= 50){
            color = '#ffb822';
        } else {
            color = '#8f0404';
        }
        this.doughnutChartLabels = ['% Correctas','% Incorrectas'];
        this.doughnutChartData = [[this.porcentAciertos, resto ]];
        this.doughnutChartColors = [
            {
                backgroundColor: [ color, 'lightgrey'],
            },
        ];
    }

    // reset() {
    //     this.scormStoreService.reset();
    // }

}
