import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftsComponentComponent } from './nfts-component/nfts-component.component';
import { NftDetailsComponent } from './nft-details/nft-details.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    NftsComponentComponent,
    NftDetailsComponent
  ],
  imports: [
    CommonModule,

    ProgressSpinnerModule,

    InputTextModule,
    ButtonModule

  ]
})
export class NftsModule { }
