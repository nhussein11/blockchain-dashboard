import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponentComponent } from './home-component/home-component.component';
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
      ,{
      enableTracing:false,
      preloadingStrategy:PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
