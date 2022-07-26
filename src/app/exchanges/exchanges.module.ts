import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ExchangesRoutingModule } from './exchanges-routing.module';
import { PrimengModule } from '../primeng/primeng.module';


import { ExchangesComponent } from './pages/exchanges-component/exchanges.component';
import { ExchangeDetailsComponent } from './pages/exchange-details/exchange-details.component';

@NgModule({
  declarations: [
    ExchangesComponent,
    ExchangeDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExchangesRoutingModule,
    
    InfiniteScrollModule,
    Ng2SearchPipeModule,
    
    PrimengModule
  ]
})
export class ExchangesModule { }
