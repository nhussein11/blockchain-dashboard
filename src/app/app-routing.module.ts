import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home-component/home.component';
import { NotFoundPageComponent } from './not-found-page-component/not-found-page.component';





const routes: Routes = [
  {
    path: '', 
    component: HomeComponent 
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
    component:NotFoundPageComponent
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
