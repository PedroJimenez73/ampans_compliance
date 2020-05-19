import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

declare var window: any;

class result  {
    answersChecked: any;
    result: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ScormStoreService {

    diapos = [
        {text:"",class:"front-page", menu: false, question: false, page: null},
        {text:"Índex",class:"regular", menu: true, question: false, page: null},
        {text:"Què és el Compliance?",class:"regular", menu: true, question: false, page: null},
        {text:"De qui és responsabilitat el bon funcionament del Compliance a AMPANS",class:"regular", menu: true, question: false, page: null},
        {text:"Per què aquesta formació",class:"regular", menu: true, question: false, page: null},
        {text:"Com puc saber els valors ètics?",class:"regular", menu: true, question: false, page: null},
        {text:"On puc comunicar una situació o fets que poden implicar un risc o una vulneració de les normes legals o de la nostra ètica?",class:"regular", menu: true, question: false, page: null},
        // {text:"Riscos penals I",class:"regular", menu: true, question: true, page: null},
        {text:"Riscos penals I",class:"regular", menu: true, question: false, page: null},
        {text:"Riscos penals II",class:"regular", menu: true, question: false, page: null},
        {text:"Exercicis generals",class:"regular", menu: true, question: true, page: null}, // 9
        {text:"Exercicis generals",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis generals",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis generals",class:"regular", menu: false, question: true, page: null}, 
        {text:"Resum d’exercicis generals",class:"regular", menu: true, question: true, page: null}, // 13
        {text:"Exercicis d’activitat relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: true, question: true, page: null}, // 14
        {text:"Exercicis d’activitat relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitat relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitat relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitat relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitat relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitat relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitat relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitat relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitat relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitat relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Resum d’exercicis d’activitat relatives a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat",class:"regular", menu: true, question: true, page: null}, // 25
        {text:"Exercicis d’maltractament",class:"regular", menu: true, question: true, page: null}, // 26
        {text:"Exercicis d’maltractament",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’maltractament",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’maltractament",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’maltractament",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’maltractament",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’maltractament",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’maltractament",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’maltractament",class:"regular", menu: false, question: true, page: null},
        {text:"Resum d’exercicis d’maltractament",class:"regular", menu: true, question: true, page: null}, // 35
        {text:"Exercicis d’violació de la intimitat i violació informàtica",class:"regular", menu: true, question: true, page: null}, // 36
        {text:"Exercicis d’violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Resum d’exercicis d’violació de la intimitat i violació informàtica",class:"regular", menu: true, question: true, page: null}, // 44
    ];

    indexPantalla = 0;
    
    // To save char in cmi array have [menu, question, learned]
    progress = [];

    results = [];

    cmiStore = {
        progress: [],
        results: []
    }

    constructor() { 
        this.diapos.forEach((element, i) => {
            this.diapos[i].page = i;
            this.progress.push([element.menu, element.question, false]);
            if(element.question === true) {
                this.results.push({answersChecked: null, result: false});
            }
        });
        setTimeout(()=> {
            if (window.ScormProcessGetValue("cmi.suspend_data")) {
                this.cmiStore = JSON.parse(window.ScormProcessGetValue("cmi.suspend_data"));
                this.progress = this.cmiStore.progress;
                this.results = this.cmiStore.results;
            } else {
                this.cmiStore = {
                    progress: this.progress,
                    results: this.results
                }
            }
            if(window.ScormProcessGetValue("cmi.core.lesson_location", false)){
                this.indexPantalla = window.ScormProcessGetValue("cmi.core.lesson_location", false);
                this.navTo(this.indexPantalla);
            }

        }, 750);
    }

    private stateIn: BehaviorSubject<any> = new BehaviorSubject<any>({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});

    state$: Observable<any> = this.stateIn.asObservable();

    getInitialState() {
        return this.diapos.length;
    }

    prevPantalla() {
        this.indexPantalla--;
        this.navToPage();
    }

    nextPantalla() {
        this.indexPantalla++;
        this.progress[this.indexPantalla][2] = true;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        this.navToPage();
    }

    navTo(e) {
        this.indexPantalla = e;
        this.navToPage();
    }

    navToPage() {
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
        window.ScormProcessSetValue("cmi.core.lesson_location", (this.indexPantalla).toString());
        if (this.indexPantalla === (this.diapos.length - 1)){
            // reachedEnd = true;
            window.ScormProcessSetValue("cmi.core.lesson_status", "completed");
        }
    }

    getResults() {
        return this.results;
    }

    setResults(id, answersChecked, result) {
        this.results[id - 1] = {answersChecked: answersChecked, result: result};
        this.progress[this.indexPantalla][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
        this.cmiStore.results = this.results;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }
    }

    getAswersChecked(id) {
        if(this.results[id - 1] !== null) {
            return this.results[id - 1].answersChecked;
        } else {
            return false
        }
    }

    exit() {
        window.open(window.location, '_self').close();
        window.ScormProcessSetValue("cmi.core.exit", "suspend");
    }

    readCodi() {
        this.progress[7][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit1() {
        for (let i = 9; i < 13; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 0; i < 4; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(2);
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }

    }

    passUnit1() {
        this.progress[13][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit2() {
        for (let i = 14; i < 25; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 4; i < 15; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(2);
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        } else {
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }
    }

    passUnit2() {
        this.progress[25][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit3() {
        for (let i = 26; i < 35; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 15; i < 24; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(2);
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }

    }

    passUnit3() {
        this.progress[35][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit4() {
        for (let i = 52; i < 53; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 9; i < 10; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(38);
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }

    }

    passUnit4() {
        this.progress[53][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit5() {
        for (let i = 59; i < 61; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 10; i < 12; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(54);
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }

    }

    passUnit5() {
        this.progress[61][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit6() {
        for (let i = 66; i < 68; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 12; i < 14; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(62);
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }

    }

    passUnit6() {
        this.progress[68][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit7() {
        for (let i = 78; i < 79; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 14; i < 15; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(69);
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }

    }

    passUnit7() {
        this.progress[79][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit8() {
        for (let i = 92; i < 93; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 15; i < 16; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(80);
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }

    }

    passUnit8() {
        this.progress[93][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit9() {
        for (let i = 106; i < 107; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 16; i < 17; i++) {
            this.results[i].answersChecked = null;
            this.results[i].result = false;
        }
        this.navTo(94);
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }

    }

    passUnit9() {
        this.progress[107][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    reset() {
        this.navTo(1);
        this.results = [];
        this.progress = [];
        this.diapos.forEach(element => {
            this.progress.push([element.menu, element.question, false]);
            if(element.question === true) {
                this.results.push({answersChecked: null, result: false});
            }
        });
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
        this.cmiStore.results = this.results;
        this.cmiStore.progress = this.progress;
        let cmiStoreStr = JSON.stringify(this.cmiStore);
        window.ScormProcessSetValue("cmi.suspend_data", cmiStoreStr);
        let totalAciertos = 0;
        this.results.forEach((element) => {
            if(element.result) {
                totalAciertos++;
            }
        });
        let score = Math.round((totalAciertos / this.results.length) * 100);
        window.ScormProcessSetValue("cmi.core.score.raw", score);
        window.ScormProcessSetValue("cmi.core.score.min", "0");
        window.ScormProcessSetValue("cmi.core.score.max", "100");
        if (score >= 50){
            window.ScormProcessSetValue("cmi.core.lesson_status", "passed");
        }
        else{
            window.ScormProcessSetValue("cmi.core.lesson_status", "failed");
        }
    }

}
