import { Injectable } from '@angular/core';
import { Pantalla } from '../modelos/pantalla.models';
import { PortadaComponent } from '../contenido/portada/portada.component';
import { IndiceComponent } from '../contenido/indice/indice.component';
import { Diapo1Component } from '../contenido/diapo1/diapo1.component';
import { Diapo2Component } from '../contenido/diapo2/diapo2.component';
import { Diapo3Component } from '../contenido/diapo3/diapo3.component';
import { Diapo4Component } from '../contenido/diapo4/diapo4.component';
import { Diapo5Component } from '../contenido/diapo5/diapo5.component';
import { Diapo6Component } from '../contenido/diapo6/diapo6.component';
import { Diapo7Component } from '../contenido/diapo7/diapo7.component';
import { Diapo8Component } from '../contenido/diapo8/diapo8.component';
import { Diapo9Component } from '../contenido/diapo9/diapo9.component';
import { Diapo10Component } from '../contenido/diapo10/diapo10.component';
import { Diapo11Component } from '../contenido/diapo11/diapo11.component';
import { Diapo12Component } from '../contenido/diapo12/diapo12.component';
import { Diapo13Component } from '../contenido/diapo13/diapo13.component';
import { Diapo14Component } from '../contenido/diapo14/diapo14.component';
import { Diapo15Component } from '../contenido/diapo15/diapo15.component';
import { Diapo16Component } from '../contenido/diapo16/diapo16.component';
import { Diapo17Component } from '../contenido/diapo17/diapo17.component';
import { Diapo18Component } from '../contenido/diapo18/diapo18.component';
import { Diapo19Component } from '../contenido/diapo19/diapo19.component';
import { Diapo20Component } from '../contenido/diapo20/diapo20.component';
import { Diapo21Component } from '../contenido/diapo21/diapo21.component';
import { Diapo22Component } from '../contenido/diapo22/diapo22.component';
import { Diapo23Component } from '../contenido/diapo23/diapo23.component';
import { Diapo24Component } from '../contenido/diapo24/diapo24.component';
import { Diapo25Component } from '../contenido/diapo25/diapo25.component';
import { Diapo26Component } from '../contenido/diapo26/diapo26.component';
import { Diapo27Component } from '../contenido/diapo27/diapo27.component';
import { Diapo28Component } from '../contenido/diapo28/diapo28.component';
import { Diapo30Component } from '../contenido/diapo30/diapo30.component';
import { Diapo31Component } from '../contenido/diapo31/diapo31.component';
import { Diapo32Component } from '../contenido/diapo32/diapo32.component';
import { Diapo33Component } from '../contenido/diapo33/diapo33.component';
import { Diapo34Component } from '../contenido/diapo34/diapo34.component';
import { Diapo35Component } from '../contenido/diapo35/diapo35.component';
import { Diapo36Component } from '../contenido/diapo36/diapo36.component';
import { Diapo37Component } from '../contenido/diapo37/diapo37.component';
import { Diapo38Component } from '../contenido/diapo38/diapo38.component';
import { Diapo39Component } from '../contenido/diapo39/diapo39.component';
import { Diapo40Component } from '../contenido/diapo40/diapo40.component';
import { Diapo29Component } from '../contenido/diapo29/diapo29.component';


@Injectable({
  providedIn: 'root'
})

export class PantallasService {

    pantallas = [
        new Pantalla(PortadaComponent, {}),
        new Pantalla(IndiceComponent, {}),
        new Pantalla(Diapo1Component, {}),
        new Pantalla(Diapo2Component, {}),
        new Pantalla(Diapo3Component, {}),
        new Pantalla(Diapo4Component, {}),
        new Pantalla(Diapo5Component, {}),
        new Pantalla(Diapo6Component, {}),
        new Pantalla(Diapo7Component, {}),
        new Pantalla(Diapo8Component, {}),
        new Pantalla(Diapo9Component, {}),
        new Pantalla(Diapo10Component, {}),
        new Pantalla(Diapo11Component, {}),
        new Pantalla(Diapo12Component, {}),
        new Pantalla(Diapo13Component, {}),
        new Pantalla(Diapo14Component, {}),
        new Pantalla(Diapo15Component, {}),
        new Pantalla(Diapo16Component, {}),
        new Pantalla(Diapo17Component, {}),
        new Pantalla(Diapo18Component, {}),
        new Pantalla(Diapo19Component, {}),
        new Pantalla(Diapo20Component, {}),
        new Pantalla(Diapo21Component, {}),
        new Pantalla(Diapo22Component, {}),
        new Pantalla(Diapo23Component, {}),
        new Pantalla(Diapo24Component, {}),
        new Pantalla(Diapo25Component, {}),
        new Pantalla(Diapo26Component, {}),
        new Pantalla(Diapo27Component, {}),
        new Pantalla(Diapo28Component, {}),
        new Pantalla(Diapo29Component, {}),
        new Pantalla(Diapo30Component, {}),
        new Pantalla(Diapo31Component, {}),
        new Pantalla(Diapo32Component, {}),
        new Pantalla(Diapo33Component, {}),
        new Pantalla(Diapo34Component, {}),
        new Pantalla(Diapo35Component, {}),
        new Pantalla(Diapo36Component, {}),
        new Pantalla(Diapo37Component, {}),
        new Pantalla(Diapo38Component, {}),
        new Pantalla(Diapo39Component, {}),
        new Pantalla(Diapo40Component, {}),
    ];

    constructor() { }

    getPantallas() {
        return this.pantallas;
    }

}
