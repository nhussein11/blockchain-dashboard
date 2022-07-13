import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CryptocurrenciesModule } from './cryptocurrencies/cryptocurrencies.module';
import { NftsModule } from './nfts/nfts.module';
import { ExchangesModule } from './exchanges/exchanges.module';
import { HomeComponentComponent } from './home-component/home-component.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CryptocurrenciesModule,
    NftsModule,
    ExchangesModule    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
