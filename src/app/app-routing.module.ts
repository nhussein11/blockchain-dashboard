import { NgModule } from '@angular/core';

import { CryptosComponentComponent } from './cryptos-component/cryptos-component.component';
import { NftsComponentComponent } from './nfts-component/nfts-component.component';
import { DaosComponentComponent } from './daos-component/daos-component.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';


const routes : Routes=[
  {path:'', component: HomeComponentComponent},
  {path:'cryptocurrencies', component: CryptosComponentComponent},
  {path:'crypto_details', component: CryptoDetailsComponent},
  {path:'nfts', component: NftsComponentComponent},
  {path:'daos', component: DaosComponentComponent},
  {path:'**', component: NotFoundPageComponentComponent},

]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
