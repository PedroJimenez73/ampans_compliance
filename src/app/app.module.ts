import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comunes/header/header.component';
import { LoadDirective } from './directivas/load.directive';
import { PantallaComponent } from './pantalla/pantalla.component';
import { FooterComponent } from './comunes/footer/footer.component';
import { PortadaComponent } from './contenido/portada/portada.component';
import { IndiceComponent } from './contenido/indice/indice.component';
import { Diapo1Component } from './contenido/diapo1/diapo1.component';
import { Diapo2Component } from './contenido/diapo2/diapo2.component';
import { Diapo3Component } from './contenido/diapo3/diapo3.component';
import { Diapo4Component } from './contenido/diapo4/diapo4.component';
import { Diapo5Component } from './contenido/diapo5/diapo5.component';
import { Diapo6Component } from './contenido/diapo6/diapo6.component';
import { Diapo7Component } from './contenido/diapo7/diapo7.component';
import { Diapo8Component } from './contenido/diapo8/diapo8.component';
import { Diapo9Component } from './contenido/diapo9/diapo9.component';
import { Diapo10Component } from './contenido/diapo10/diapo10.component';
import { Diapo11Component } from './contenido/diapo11/diapo11.component';
import { Diapo12Component } from './contenido/diapo12/diapo12.component';
import { Diapo13Component } from './contenido/diapo13/diapo13.component';
import { Diapo14Component } from './contenido/diapo14/diapo14.component';
import { Diapo15Component } from './contenido/diapo15/diapo15.component';
import { Diapo16Component } from './contenido/diapo16/diapo16.component';
import { Diapo17Component } from './contenido/diapo17/diapo17.component';
import { Diapo18Component } from './contenido/diapo18/diapo18.component';
import { Diapo19Component } from './contenido/diapo19/diapo19.component';
import { Diapo20Component } from './contenido/diapo20/diapo20.component';
import { Diapo21Component } from './contenido/diapo21/diapo21.component';
import { Diapo22Component } from './contenido/diapo22/diapo22.component';
import { Diapo23Component } from './contenido/diapo23/diapo23.component';
import { Diapo24Component } from './contenido/diapo24/diapo24.component';
import { Diapo25Component } from './contenido/diapo25/diapo25.component';
import { Diapo26Component } from './contenido/diapo26/diapo26.component';
import { Diapo27Component } from './contenido/diapo27/diapo27.component';
import { Diapo28Component } from './contenido/diapo28/diapo28.component';
import { Diapo30Component } from './contenido/diapo30/diapo30.component';
import { Diapo31Component } from './contenido/diapo31/diapo31.component';
import { Diapo32Component } from './contenido/diapo32/diapo32.component';
import { Diapo33Component } from './contenido/diapo33/diapo33.component';
import { Diapo34Component } from './contenido/diapo34/diapo34.component';
import { Diapo35Component } from './contenido/diapo35/diapo35.component';
import { Diapo36Component } from './contenido/diapo36/diapo36.component';
import { Diapo37Component } from './contenido/diapo37/diapo37.component';
import { Diapo38Component } from './contenido/diapo38/diapo38.component';
import { Diapo39Component } from './contenido/diapo39/diapo39.component';
import { Diapo40Component } from './contenido/diapo40/diapo40.component';
import { Diapo29Component } from './contenido/diapo29/diapo29.component';
import { Diapo41Component } from './contenido/diapo41/diapo41.component';
import { Diapo42Component } from './contenido/diapo42/diapo42.component';
import { Diapo43Component } from './contenido/diapo43/diapo43.component';
import { Diapo44Component } from './contenido/diapo44/diapo44.component';
import { Diapo45Component } from './contenido/diapo45/diapo45.component';
import { Diapo46Component } from './contenido/diapo46/diapo46.component';
import { Diapo47Component } from './contenido/diapo47/diapo47.component';
import { Diapo48Component } from './contenido/diapo48/diapo48.component';
import { Diapo49Component } from './contenido/diapo49/diapo49.component';
import { Diapo50Component } from './contenido/diapo50/diapo50.component';
import { Diapo51Component } from './contenido/diapo51/diapo51.component';
import { Diapo52Component } from './contenido/diapo52/diapo52.component';
import { Diapo53Component } from './contenido/diapo53/diapo53.component';
import { Diapo54Component } from './contenido/diapo54/diapo54.component';
import { Diapo55Component } from './contenido/diapo55/diapo55.component';
import { Diapo56Component } from './contenido/diapo56/diapo56.component';
import { Diapo57Component } from './contenido/diapo57/diapo57.component';
import { Diapo58Component } from './contenido/diapo58/diapo58.component';
import { Diapo59Component } from './contenido/diapo59/diapo59.component';
import { Diapo60Component } from './contenido/diapo60/diapo60.component';
import { Diapo61Component } from './contenido/diapo61/diapo61.component';
import { Diapo62Component } from './contenido/diapo62/diapo62.component';
import { Diapo63Component } from './contenido/diapo63/diapo63.component';
import { Diapo64Component } from './contenido/diapo64/diapo64.component';
import { Diapo65Component } from './contenido/diapo65/diapo65.component';
import { Diapo66Component } from './contenido/diapo66/diapo66.component';
import { Diapo67Component } from './contenido/diapo67/diapo67.component';
import { Diapo68Component } from './contenido/diapo68/diapo68.component';
import { Diapo69Component } from './contenido/diapo69/diapo69.component';
import { Diapo70Component } from './contenido/diapo70/diapo70.component';
import { Diapo71Component } from './contenido/diapo71/diapo71.component';
import { Diapo72Component } from './contenido/diapo72/diapo72.component';
import { Diapo73Component } from './contenido/diapo73/diapo73.component';
import { Diapo74Component } from './contenido/diapo74/diapo74.component';
import { Diapo75Component } from './contenido/diapo75/diapo75.component';
import { Diapo76Component } from './contenido/diapo76/diapo76.component';
import { Diapo77Component } from './contenido/diapo77/diapo77.component';
import { Diapo78Component } from './contenido/diapo78/diapo78.component';
import { Diapo79Component } from './contenido/diapo79/diapo79.component';
import { Diapo80Component } from './contenido/diapo80/diapo80.component';
import { Diapo81Component } from './contenido/diapo81/diapo81.component';
import { Diapo82Component } from './contenido/diapo82/diapo82.component';
import { Diapo83Component } from './contenido/diapo83/diapo83.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadDirective,
    PantallaComponent,
    FooterComponent,
    PortadaComponent,
    IndiceComponent,
    Diapo1Component,
    Diapo2Component,
    Diapo3Component,
    Diapo4Component,
    Diapo5Component,
    Diapo6Component,
    Diapo7Component,
    Diapo8Component,
    Diapo9Component,
    Diapo10Component,
    Diapo11Component,
    Diapo12Component,
    Diapo13Component,
    Diapo14Component,
    Diapo15Component,
    Diapo16Component,
    Diapo17Component,
    Diapo18Component,
    Diapo19Component,
    Diapo20Component,
    Diapo21Component,
    Diapo22Component,
    Diapo23Component,
    Diapo24Component,
    Diapo25Component,
    Diapo26Component,
    Diapo27Component,
    Diapo28Component,
    Diapo29Component,
    Diapo30Component,
    Diapo31Component,
    Diapo32Component,
    Diapo33Component,
    Diapo34Component,
    Diapo35Component,
    Diapo36Component,
    Diapo37Component,
    Diapo38Component,
    Diapo39Component,
    Diapo40Component,
    Diapo41Component,
    Diapo42Component,
    Diapo43Component,
    Diapo44Component,
    Diapo45Component,
    Diapo46Component,
    Diapo47Component,
    Diapo48Component,
    Diapo49Component,
    Diapo50Component,
    Diapo51Component,
    Diapo52Component,
    Diapo53Component,
    Diapo54Component,
    Diapo55Component,
    Diapo56Component,
    Diapo57Component,
    Diapo58Component,
    Diapo59Component,
    Diapo60Component,
    Diapo61Component,
    Diapo62Component,
    Diapo63Component,
    Diapo64Component,
    Diapo65Component,
    Diapo66Component,
    Diapo67Component,
    Diapo68Component,
    Diapo69Component,
    Diapo70Component,
    Diapo71Component,
    Diapo72Component,
    Diapo73Component,
    Diapo74Component,
    Diapo75Component,
    Diapo76Component,
    Diapo77Component,
    Diapo78Component,
    Diapo79Component,
    Diapo80Component,
    Diapo81Component,
    Diapo82Component,
    Diapo83Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ 
    PortadaComponent,
    IndiceComponent,
    Diapo1Component,
    Diapo2Component,
    Diapo3Component,
    Diapo4Component,
    Diapo5Component,
    Diapo6Component,
    Diapo7Component,
    Diapo8Component,
    Diapo9Component,
    Diapo10Component,
    Diapo11Component,
    Diapo12Component,
    Diapo13Component,
    Diapo14Component,
    Diapo15Component,
    Diapo16Component,
    Diapo17Component,
    Diapo18Component,
    Diapo19Component,
    Diapo20Component,
    Diapo21Component,
    Diapo22Component,
    Diapo23Component,
    Diapo24Component,
    Diapo25Component,
    Diapo26Component,
    Diapo27Component,
    Diapo28Component,
    Diapo29Component,
    Diapo30Component,
    Diapo31Component,
    Diapo32Component,
    Diapo33Component,
    Diapo34Component,
    Diapo35Component,
    Diapo36Component,
    Diapo37Component,
    Diapo38Component,
    Diapo39Component,
    Diapo40Component,
    Diapo40Component,
    Diapo41Component,
    Diapo42Component,
    Diapo43Component,
    Diapo44Component,
    Diapo45Component,
    Diapo46Component,
    Diapo47Component,
    Diapo48Component,
    Diapo49Component,
    Diapo50Component,
    Diapo51Component,
    Diapo52Component,
    Diapo53Component,
    Diapo54Component,
    Diapo55Component,
    Diapo56Component,
    Diapo57Component,
    Diapo58Component,
    Diapo59Component,
    Diapo60Component,
    Diapo61Component,
    Diapo62Component,
    Diapo63Component,
    Diapo64Component,
    Diapo65Component,
    Diapo66Component,
    Diapo67Component,
    Diapo68Component,
    Diapo69Component,
    Diapo70Component,
    Diapo71Component,
    Diapo72Component,
    Diapo73Component,
    Diapo74Component,
    Diapo75Component,
    Diapo75Component,
    Diapo76Component,
    Diapo77Component,
    Diapo78Component,
    Diapo79Component,
    Diapo80Component,
    Diapo81Component,
    Diapo82Component,
    Diapo83Component,
  ]
})
export class AppModule { }
