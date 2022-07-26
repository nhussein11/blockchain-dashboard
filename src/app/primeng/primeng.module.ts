import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import {DividerModule} from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';
import {ScrollPanelModule} from 'primeng/scrollpanel';


@NgModule({
  exports: [
    ButtonModule,
    CarouselModule,
    ChartModule,
    DividerModule,
    InputTextModule,
    ScrollPanelModule,
    ProgressSpinnerModule,
    TableModule
  ]
})
export class PrimengModule { }
