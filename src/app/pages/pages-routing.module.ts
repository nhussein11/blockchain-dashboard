import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoDetailsComponent } from './cryptocurrencies/crypto-details/crypto-details.component';
import { CryptosComponentComponent } from './cryptocurrencies/cryptos-component/cryptos-component.component';
import { DaosComponentComponent } from './daos/daos-component/daos-component.component';
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
      { path: 'daos', component: DaosComponentComponent },
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
