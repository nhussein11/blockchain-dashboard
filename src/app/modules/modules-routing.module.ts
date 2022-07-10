import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoDetailsComponent } from './cryptocurrencies/crypto-details/crypto-details.component';
import { CryptosComponentComponent } from './cryptocurrencies/cryptos-component/cryptos-component.component';

import { ExchangesComponentComponent } from './exchanges/exchanges-component/exchanges-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NftsComponentComponent } from './nfts/nfts-component/nfts-component.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponentComponent },
      { path: 'cryptocurrencies', component: CryptosComponentComponent },
      { path: 'crypto_details/:id', component: CryptoDetailsComponent },
      { path: 'nfts', component: NftsComponentComponent },
      
      { path: 'exchanges', component: ExchangesComponentComponent },
      { path: '**', component: NotFoundPageComponentComponent }
    ]
  }
]


@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
