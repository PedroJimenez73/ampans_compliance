import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

declare var $: any;

@Component({
  selector: 'app-diapo38',
  templateUrl: './diapo38.component.html',
  styleUrls: ['./diapo38.component.scss']
})

export class Diapo38Component implements OnInit {

    showMensaje = false;
    lockInput = false;
    form: FormGroup;
    abcAnswers = ['a','b','c','d','e','f','g','h','i','j'];
    answersChecked = [];
    result: boolean;
    @ViewChildren('labelsRef') labelsRef: QueryList<ElementRef>;
    elementosLabelsRef = [];
    @ViewChildren('inputsRef') inputsRef: QueryList<ElementRef>;
    elementosInputsRef = [];

    pregunta = {
        id: '28',
        question: 'En un centre residencial tenir penjat a la capçalera del llit les malalties infecciones de la persona per tal d’evitar riscos i contagis entre el personal treballador.',
        answers: [
            'Penal o Dubte ètic (cal consultar)',
            'Correcte'
        ],
        corrects: ['a'],
        feedback: [
            'Pot ser necessària disposar d’una informació rapida i visual de les malalties que te una persona per tal de donar una adequada atenció a la pròpia persona i per tal de fer una adequada prevenció de riscos laborals. Però en qualsevol cas  s’ha de garantir que aquesta informació queda preservada. Es a dir cal: analitzar si l’habitació es col·lectiva o individual, si hi entren altres persones alienes al servei, si hi entren o es comparteix amb altres usuaris, etc.',
            'Igualment un servei pot disposar de codis, símbols o altres elements visual o de consulta per tal de donar pautes  per tal d’evitar riscos sense donar informació de les malalties que pateix una persona. Com a conclusió general es que no podem mostrar de manera publica o en llocs on moltes persones hi tenen accés les malalties infecto-contagioses que pateix una persona.'
        ]
    }

    constructor(private ff: FormBuilder,
                private cd: ChangeDetectorRef,
                private scormStoreService: ScormStoreService) { }

    ngOnInit() {
        const scrollToTop = window.setInterval(() => {
            const pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20);
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
        this.form = this.ff.group({
            answerRadio: ''
        });
        if (this.scormStoreService.getAswersChecked(this.pregunta.id)) {
            this.answersChecked = this.scormStoreService.getAswersChecked(this.pregunta.id)
            this.form.get('answerRadio').patchValue(this.answersChecked[0],{emitEvent: false});
            this.checkAnswer();
        }
    }

    checkAnswer() {
        this.showMensaje = true;
        this.lockInput = true;
        this.answersChecked[0] = this.form.get('answerRadio').value;
        if (this.answersChecked[0] === this.pregunta.corrects[0]) {
            this.result = true;
        } else {
            this.result = false;
        }
        this.cd.detectChanges();
        this.elementosInputsRef = [];
        this.inputsRef.forEach(elem => {
            this.elementosInputsRef.push(elem);
        })
        this.elementosInputsRef.forEach(elem => {
            elem.nativeElement.disabled = true;
        });
        this.elementosLabelsRef = [];
        this.labelsRef.forEach(elem => {
            this.elementosLabelsRef.push(elem);
        })
        this.elementosLabelsRef.forEach(elem => {
            elem.nativeElement.classList.remove('incorrecta');
            elem.nativeElement.classList.remove('correcta');
        });
        let indexCorrecta = this.abcAnswers.indexOf(this.pregunta.corrects[0]);
        let indexMarcada = this.abcAnswers.indexOf(this.answersChecked[0]);
        if (indexCorrecta === indexMarcada) {
            this.elementosLabelsRef[indexMarcada].nativeElement.classList.add('correcta');    
        } else {
            this.elementosLabelsRef[indexMarcada].nativeElement.classList.add('incorrecta');     
        }
    }

    setAnswer() {
        if (this.form.get('answerRadio').value !== '') {
            this.checkAnswer();
            this.scormStoreService.setResults(this.pregunta.id, this.answersChecked, this.result);
        } else {
            this.toggleResumeModal()
        }
    }

    toggleResumeModal() {
        $("#modal-resume").toggleClass("show");
        $("#overlay").toggleClass("show");
        setTimeout(function(){
            $("#modal-resume").toggleClass("visible");
            $("#overlay").toggleClass("visible");
        }, 20);
    }

}


