import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

@Component({
  selector: 'app-diapo54',
  templateUrl: './diapo54.component.html',
  styleUrls: ['./diapo54.component.scss']
})

export class Diapo54Component implements OnInit {

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
    timer: any;
    
    constructor(private scormStoreService: ScormStoreService) { 
    }

    ngOnInit() {
        for (let i = 37; i < 41; i ++) {
            this.results.push(this.scormStoreService.getResults()[i].result)
        }
        this.results.forEach(elem => {
            if(elem) {
                this.totalAciertos++;
            }
        });
        this.porcentAciertos = Math.round((this.totalAciertos / this.results.length) * 100);
        this.loadChartResultados();
        if (this.porcentAciertos < 80) {
			this.mensaje = 'Ho sentim, no has superat les activitats. Pots prémer en repassar per estudiar de nou i tornar a contestar les preguntes.';
		} else if (this.porcentAciertos >= 80) {
			this.mensaje = 'Enhorabona, has superat les activitats! Prem Següent per continuar.';
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

    reset() {
        this.scormStoreService.resetUnit4();
    }

}
