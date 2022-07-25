import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangesComponent } from './pages/exchanges-component/exchanges.component';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ExchangeDetailsComponent } from './pages/exchange-details/exchange-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ButtonModule } from 'primeng/button';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ExchangesRoutingModule } from './exchanges-routing.module';



@NgModule({
  declarations: [
    ExchangesComponent,
    ExchangeDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExchangesRoutingModule,

    InputTextModule,
    ProgressSpinnerModule,
    InfiniteScrollModule,
    Ng2SearchPipeModule,

    ButtonModule
  ]
})
export class ExchangesModule { }
