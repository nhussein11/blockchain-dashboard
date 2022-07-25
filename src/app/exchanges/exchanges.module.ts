import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangesComponentComponent } from './exchanges-component/exchanges-component.component';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ExchangeDetailsComponent } from './exchange-details/exchange-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ButtonModule } from 'primeng/button';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExchangesComponentComponent,
    ExchangeDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ProgressSpinnerModule,
    InfiniteScrollModule,
    Ng2SearchPipeModule,

    ButtonModule
  ]
})
export class ExchangesModule { }
