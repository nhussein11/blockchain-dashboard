import { NgModule } from '@angular/core';


import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';


import { PagesRoutingModule } from './modules-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';
import { NftsModule } from './nfts/nfts.module';
import { ExchangesModule } from './exchanges/exchanges.module';


@NgModule({
  declarations: [
    
    NotFoundPageComponentComponent,
    HomeComponentComponent

  ],
  imports: [
    
    PagesRoutingModule,

    CryptocurrenciesModule,
    NftsModule,
    ExchangesModule,

    HttpClientModule,
    InfiniteScrollModule,
    
  ],
  providers:[NgbActiveModal]
})
export class PagesModule { }
