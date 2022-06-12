import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CryptosComponentComponent } from './cryptos-component/cryptos-component.component';
import { NftsComponentComponent } from './nfts-component/nfts-component.component';
import { DaosComponentComponent } from './daos-component/daos-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptosComponentComponent,
    NftsComponentComponent,
    DaosComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
