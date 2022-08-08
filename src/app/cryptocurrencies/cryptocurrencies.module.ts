
import { CryptoDetailsComponent } from './pages/crypto-details/crypto-details.component';
import { CryptosComponent } from './pages/cryptos-component/cryptos.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { CryptocurrenciesRoutingModule } from './cryptocurrencies-routing.module';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    CryptoDetailsComponent,
    CryptosComponent
  ],
  imports: [
    CommonModule,
    CryptocurrenciesRoutingModule,
    
    NgxPaginationModule,
    
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule,

    PrimengModule

  ]
})
export class CryptocurrenciesModule { }
