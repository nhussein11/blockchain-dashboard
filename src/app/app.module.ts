import { AppComponent } from './app.component';
import { CryptosComponentComponent } from './pages/cryptocurrencies/cryptos-component/cryptos-component.component';
import { CryptoDetailsComponent } from './pages/cryptocurrencies/crypto-details/crypto-details.component';
import { DaosComponentComponent } from './pages/daos/daos-component/daos-component.component';
import { DaoDetailsComponent } from './pages/daos/dao-details/dao-details.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { NftsComponentComponent } from './pages/nfts/nfts-component/nfts-component.component';
import { NftDetailsComponent } from './pages/nfts/nft-details/nft-details.component';
import { NotFoundPageComponentComponent } from './pages/not-found-page-component/not-found-page-component.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,

    CryptosComponentComponent,
    NftsComponentComponent,
    DaosComponentComponent,
    HomeComponentComponent,

    CryptoDetailsComponent,
    DaoDetailsComponent,
    NftDetailsComponent,

    NotFoundPageComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
