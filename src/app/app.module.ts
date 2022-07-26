import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';
import { NftsModule } from './nfts/nfts.module';
import { ExchangesModule } from './exchanges/exchanges.module';



import { FavsModule } from './favs/favs.module';
import { HomeComponent } from './home-component/home.component';
import { PrimengModule } from './primeng/primeng.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CryptocurrenciesModule,
    NftsModule,
    ExchangesModule,
    FavsModule,
    



    PrimengModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
