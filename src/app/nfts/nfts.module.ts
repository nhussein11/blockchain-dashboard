import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';

import { NftDetailsComponent } from './pages/nft-details/nft-details.component';
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
    PrimengModule
  ]
})
export class NftsModule { }
