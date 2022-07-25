import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NftDetailsComponent } from './pages/nft-details/nft-details.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NftsComponent } from './pages/nfts-component/nfts.component';
import { NftsRoutingModule } from './nfts-routing.module';




@NgModule({
  declarations: [
    NftsComponent,
    NftDetailsComponent
  ],
  imports: [
    CommonModule,
    NftsRoutingModule,

    ProgressSpinnerModule,

    InputTextModule,
    ButtonModule

  ]
})
export class NftsModule { }
