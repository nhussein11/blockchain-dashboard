import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CryptosComponentComponent } from './pages/cryptocurrencies/cryptos-component/cryptos-component.component';
import { NftsComponentComponent } from './pages/nfts/nfts-component/nfts-component.component';
import { DaosComponentComponent } from './pages/daos/daos-component/daos-component.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundPageComponentComponent } from './pages/not-found-page-component/not-found-page-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoDetailsComponent } from './pages/cryptocurrencies/crypto-details/crypto-details.component';
// import { AlertModule } from 'ngx-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DaoDetailsComponent } from './pages/daos/dao-details/dao-details.component';
import { NftDetailsComponent } from './pages/nfts/nft-details/nft-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CryptosComponentComponent,
    NftsComponentComponent,
    DaosComponentComponent,
    HomeComponentComponent,
    NotFoundPageComponentComponent,

    CryptoDetailsComponent,
    DaoDetailsComponent,
    NftDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // AlertModule.forRoot(),
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
