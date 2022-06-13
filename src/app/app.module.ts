import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CryptosComponentComponent } from './cryptos-component/cryptos-component.component';
import { NftsComponentComponent } from './nfts-component/nfts-component.component';
import { DaosComponentComponent } from './daos-component/daos-component.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptosComponentComponent,
    NftsComponentComponent,
    DaosComponentComponent,
    HomeComponentComponent,
    NotFoundPageComponentComponent,
    CryptoDetailsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
