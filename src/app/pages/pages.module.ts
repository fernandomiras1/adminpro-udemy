import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// ng2- charts
import { ChartsModule } from 'ng2-charts';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/graficoDona/graficoDona.component';
import { PromesasComponent } from './promesas/promesas.component';


@NgModule({
 declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
 ],
 exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
 ],
 imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
 ]

})

export class PagesModule { }