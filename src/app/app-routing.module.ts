import { NgModule } from '@angular/core';


import { CryptosComponentComponent } from './pages/cryptocurrencies/cryptos-component/cryptos-component.component';
import { NftsComponentComponent } from './pages/nfts/nfts-component/nfts-component.component';
import { DaosComponentComponent } from './pages/daos/daos-component/daos-component.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { NotFoundPageComponentComponent } from './pages/not-found-page-component/not-found-page-component.component';
import { CryptoDetailsComponent } from './pages/cryptocurrencies/crypto-details/crypto-details.component';
import { NftDetailsComponent } from './pages/nfts/nft-details/nft-details.component';

const routes : Routes=[
  {path:'', component: HomeComponentComponent},
  {path:'cryptocurrencies', component: CryptosComponentComponent},
  {path:'crypto_details/:id', component: CryptoDetailsComponent},
  {path:'nfts', component: NftsComponentComponent},
  {path:'nft_details/:data', component: NftDetailsComponent},
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
