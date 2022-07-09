import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CryptosComponentComponent } from './cryptocurrencies/cryptos-component/cryptos-component.component';
import { CryptoDetailsComponent } from './cryptocurrencies/crypto-details/crypto-details.component';
import { NftsComponentComponent } from './nfts/nfts-component/nfts-component.component';
import { NftDetailsComponent } from './nfts/nft-details/nft-details.component';
import { DaosComponentComponent } from './daos/daos-component/daos-component.component';
import { DaoDetailsComponent } from './daos/dao-details/dao-details.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';


import { PagesRoutingModule } from './pages-routing.module';

import { ChartModule } from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ExchangesComponentComponent } from './exchanges/exchanges-component/exchanges-component.component';


@NgModule({
  declarations: [
    CryptosComponentComponent,
    CryptoDetailsComponent,
    NftsComponentComponent,
    NftDetailsComponent,
    DaosComponentComponent,
    DaoDetailsComponent,
    ExchangesComponentComponent,
    NotFoundPageComponentComponent,
    HomeComponentComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

    HttpClientModule,
    InfiniteScrollModule,
    NgxPaginationModule,
    ProgressSpinnerModule,
    ChartModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers:[NgbActiveModal]
})
export class PagesModule { }
