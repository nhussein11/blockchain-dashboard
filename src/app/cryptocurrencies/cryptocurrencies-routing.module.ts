import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CryptoDetailsComponent } from './pages/crypto-details/crypto-details.component';
import { CryptosComponent } from './pages/cryptos-component/cryptos.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'cryptocurrencies', component: CryptosComponent },
      { path: 'crypto_details/:id', component: CryptoDetailsComponent },

    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class CryptocurrenciesRoutingModule { }
