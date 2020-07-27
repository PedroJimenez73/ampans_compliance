import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

declare var window: any;

class result  {
    aC: any;  // optimizado de answerChecked
    result: boolean; // optimizado de resul
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
        {text:"Riscos penals I",class:"regular", menu: true, question: true, page: null},
        // {text:"Riscos penals I",class:"regular", menu: true, question: false, page: null},
        {text:"Riscos penals II",class:"regular", menu: true, question: false, page: null},
        {text:"Exercicis generals",class:"regular", menu: true, question: true, page: null}, // 9
        {text:"Exercicis generals",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis generals",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis generals",class:"regular", menu: false, question: true, page: null}, 
        {text:"Resum d’exercicis generals",class:"regular", menu: true, question: true, page: null}, // 13
        {text:"Exercicis d’activitats relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: true, question: true, page: null}, // 14
        {text:"Exercicis d’activitats relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitats relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitats relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitats relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitats relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitats relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitats relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitats relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitats relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis d’activitats relatives  a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat", class:"regular", menu: false, question: true, page: null},
        {text:"Resum d’exercicis d’activitats relatives a la prostitució, explotació sexual i corrupció de menors o persones amb discapacitat",class:"regular", menu: true, question: true, page: null}, // 25
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
        {text:"Exercicis de violació de la intimitat i violació informàtica",class:"regular", menu: true, question: true, page: null}, // 36
        {text:"Exercicis de violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de violació de la intimitat i violació informàtica",class:"regular", menu: false, question: true, page: null},
        {text:"Resum d’exercicis de violació de la intimitat i violació informàtica",class:"regular", menu: true, question: true, page: null}, // 44
        {text:"Exercicis de delictes per danys informàtics i contra la propietat intel·lectual i industrial",class:"regular", menu: true, question: true, page: null}, // 45
        {text:"Exercicis de delictes per danys informàtics i contra la propietat intel·lectual i industrial",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de delictes per danys informàtics i contra la propietat intel·lectual i industrial",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de delictes per danys informàtics i contra la propietat intel·lectual i industrial",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de delictes per danys informàtics i contra la propietat intel·lectual i industrial",class:"regular", menu: false, question: true, page: null},
        {text:"Resum d’exercicis de delictes per danys informàtics i contra la propietat intel·lectual i industrial",class:"regular", menu: true, question: true, page: null}, // 50
        {text:"Exercicis d'escobriment i revelació de secrets d’empresa",class:"regular", menu: true, question: true, page: null}, // 51
        {text:"Exercicis d'escobriment i revelació de secrets d’empresa",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis d'escobriment i revelació de secrets d’empresa",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis d'escobriment i revelació de secrets d’empresa",class:"regular", menu: false, question: true, page: null}, 
        {text:"Resum d’exercicis d'escobriment i revelació de secrets d’empresa",class:"regular", menu: true, question: true, page: null}, // 55
        {text:"Exercicis de delictes de corrupció en els negocis i suborn",class:"regular", menu: true, question: true, page: null}, // 56
        {text:"Exercicis de delictes de corrupció en els negocis i suborn",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de delictes de corrupció en els negocis i suborn",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis de delictes de corrupció en els negocis i suborn",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis de delictes de corrupció en els negocis i suborn",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis de delictes de corrupció en els negocis i suborn",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de delictes de corrupció en els negocis i suborn",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis de delictes de corrupció en els negocis i suborn",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis de delictes de corrupció en els negocis i suborn",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis de delictes de corrupció en els negocis i suborn",class:"regular", menu: false, question: true, page: null}, 
        {text:"Resum d’exercicis de delictes de corrupció en els negocis i suborn",class:"regular", menu: true, question: true, page: null}, // 66
        {text:"Exercicis de delictes contra el medi ambient",class:"regular", menu: true, question: true, page: null}, // 67
        {text:"Exercicis de delictes contra el medi ambient",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de delictes contra el medi ambient",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de delictes contra el medi ambient",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de delictes contra el medi ambient",class:"regular", menu: false, question: true, page: null},
        {text:"Exercicis de delictes contra el medi ambient",class:"regular", menu: false, question: true, page: null},
        {text:"Resum d’exercicis de delictes contra el medi ambient",class:"regular", menu: true, question: true, page: null}, // 73
        {text:"Exercicis d’estafes i publicitat enganyosa",class:"regular", menu: true, question: true, page: null}, // 74
        {text:"Exercicis d’estafes i publicitat enganyosa",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis d’estafes i publicitat enganyosa",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis d’estafes i publicitat enganyosa",class:"regular", menu: false, question: true, page: null}, 
        {text:"Resum d’exercicis d’estafes i publicitat enganyosa",class:"regular", menu: true, question: true, page: null}, // 78
        {text:"Exercicis de delictes contra la Hisenda Publica i contra la Seguretat Social",class:"regular", menu: true, question: true, page: null}, // 79
        {text:"Exercicis de delictes contra la Hisenda Publica i contra la Seguretat Social",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis de delictes contra la Hisenda Publica i contra la Seguretat Social",class:"regular", menu: false, question: true, page: null}, 
        {text:"Exercicis de delictes contra la Hisenda Publica i contra la Seguretat Social",class:"regular", menu: false, question: true, page: null}, 
        {text:"Resum d’exercicis de delictes contra la Hisenda Publica i contra la Seguretat Social",class:"regular", menu: true, question: true, page: null}, // 83
        {text:"Resum final d’exercicis",class:"regular", menu: true, question: true, page: null}
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
                this.results.push({aC: null, result: false});
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

    setResults(id, aC, result) {
        this.results[id - 1] = {aC: aC, result: result};
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
            return this.results[id - 1].aC;
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
            this.results[i].aC = null;
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
            this.results[i].aC = null;
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
            this.results[i].aC = null;
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
        for (let i = 36; i < 44; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 24; i < 32; i++) {
            this.results[i].aC = null;
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

    passUnit4() {
        this.progress[44][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit5() {
        for (let i = 45; i < 50; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 32; i < 37; i++) {
            this.results[i].aC = null;
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

    passUnit5() {
        this.progress[50][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit6() {
        for (let i = 51; i < 55; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 37; i < 41; i++) {
            this.results[i].aC = null;
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

    passUnit6() {
        this.progress[55][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit7() {
        for (let i = 55; i < 66; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 41; i < 55; i++) {
            this.results[i].aC = null;
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

    passUnit7() {
        this.progress[66][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit8() {
        for (let i = 67; i < 73; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 51; i < 57; i++) {
            this.results[i].aC = null;
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

    passUnit8() {
        this.progress[73][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit9() {
        for (let i = 74; i < 78; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 57; i < 61; i++) {
            this.results[i].aC = null;
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

    passUnit9() {
        this.progress[78][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    resetUnit10() {
        for (let i = 79; i < 83; i++) {
            this.progress[i][1] = true;
        }
        for (let i = 61; i < 65; i++) {
            this.results[i].aC = null;
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

    passUnit10() {
        this.progress[83][1] = false;
        this.stateIn.next({menu: this.diapos, currentPantalla: this.indexPantalla, progress: this.progress});
    }

    reset() {
        this.navTo(1);
        this.results = [];
        this.progress = [];
        this.diapos.forEach(element => {
            this.progress.push([element.menu, element.question, false]);
            if(element.question === true) {
                this.results.push({aC: null, result: false});
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
