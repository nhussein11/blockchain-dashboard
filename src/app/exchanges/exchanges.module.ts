import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangesComponentComponent } from './exchanges-component/exchanges-component.component';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ExchangeDetailsComponent } from './exchange-details/exchange-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    ExchangesComponentComponent,
    ExchangeDetailsComponent
  ],
  imports: [
    CommonModule,

    InputTextModule,
    ProgressSpinnerModule,
    InfiniteScrollModule
  ]
})
export class ExchangesModule { }
