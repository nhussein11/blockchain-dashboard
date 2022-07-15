import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CryptoDetailsComponent } from './cryptocurrencies/crypto-details/crypto-details.component';
import { CryptosComponentComponent } from './cryptocurrencies/cryptos-component/cryptos-component.component';
import { ExchangesComponentComponent } from './exchanges/exchanges-component/exchanges-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NftsComponentComponent } from './nfts/nfts-component/nfts-component.component';
import { NotFoundPageComponentComponent } from './not-found-page-component/not-found-page-component.component';



const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
  // },
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
  },

  {
    path:'',
    redirectTo:'',
    pathMatch: 'full'
  }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes,{
      enableTracing:false,
      preloadingStrategy:PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
