
import { CryptoDetailsComponent } from './pages/crypto-details/crypto-details.component';
import { CryptosComponent } from './pages/cryptos-component/cryptos.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChartModule } from 'primeng/chart';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//primeNg

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { CryptocurrenciesRoutingModule } from './cryptocurrencies-routing.module';


@NgModule({
  declarations: [
    CryptoDetailsComponent,
    CryptosComponent
  ],
  imports: [
    CommonModule,
    CryptocurrenciesRoutingModule,
    
    NgxPaginationModule,
    ProgressSpinnerModule,
    ChartModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    TableModule

  ]
})
export class CryptocurrenciesModule { }
