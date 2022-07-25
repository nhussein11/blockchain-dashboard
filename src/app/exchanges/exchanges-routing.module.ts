import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExchangeDetailsComponent } from './pages/exchange-details/exchange-details.component';
import { ExchangesComponent } from './pages/exchanges-component/exchanges.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'exchanges', component: ExchangesComponent },
      { path: 'exchanges-details', component: ExchangeDetailsComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})


export class ExchangesRoutingModule { }
