import { Component, OnInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

declare var $: any;

@Component({
  selector: 'app-diapo69',
  templateUrl: './diapo69.component.html',
  styleUrls: ['./diapo69.component.scss']
})

export class Diapo69Component implements OnInit {

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
        id: '55',
        question: 'Anar a comprar amb bosses fetes amb roba de polietilè.',
        answers: [
            'Penal o Dubte ètic (cal consultar)',
            'Correcte'
        ],
        corrects: ['b'],
        feedback: [
            'No general cap dubte ètic ni legal. Tampoc ho seria si la bossa fos de paper, palla, plàstic, etc.'
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





