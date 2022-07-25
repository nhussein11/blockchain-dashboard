import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CryptoDetailsComponent } from './cryptocurrencies/pages/crypto-details/crypto-details.component';
import { CryptosComponent } from './cryptocurrencies/pages/cryptos-component/cryptos.component';
import { ExchangesComponent } from './exchanges/pages/exchanges-component/exchanges.component';
import { FavsComponent } from './favs/pages/favs/favs.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NftsComponent } from './nfts/pages/nfts-component/nfts.component';

import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';



const routes: Routes = [
  {
    path: '', 
    component: HomeComponentComponent 
  },
  {
    path: '',
    loadChildren: () => import('./cryptocurrencies/cryptocurrencies.module').then(m => m.CryptocurrenciesModule)
  },
  {
    path: '',
    loadChildren: () => import('./nfts/nfts.module').then(m => m.NftsModule)
  },
  {
    path: '',
    loadChildren: () => import('./exchanges/exchanges.module').then(m => m.ExchangesModule)
  },
  {
    path:'404',
    component:NotFoundPageComponentComponent
  },
  {
    path:'**',
    redirectTo:'home'
  }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes
      // ,{
      // enableTracing:false,
      // preloadingStrategy:PreloadAllModules
      // }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
