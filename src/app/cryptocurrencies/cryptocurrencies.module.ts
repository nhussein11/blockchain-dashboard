
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { CryptosComponentComponent } from './cryptos-component/cryptos-component.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChartModule } from 'primeng/chart';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//primeNg
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    CryptoDetailsComponent,
    CryptosComponentComponent
  ],
  imports: [
    CommonModule,
    
    NgxPaginationModule,
    ProgressSpinnerModule,
    ChartModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule,
    InputTextModule,
    ButtonModule

  ]
})
export class CryptocurrenciesModule { }
