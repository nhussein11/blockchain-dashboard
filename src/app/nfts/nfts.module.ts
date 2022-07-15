import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NftsComponentComponent } from './nfts-component/nfts-component.component';
import { NftDetailsComponent } from './nft-details/nft-details.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    NftsComponentComponent,
    NftDetailsComponent
  ],
  imports: [
    CommonModule,

    ProgressSpinnerModule,


    InputTextModule
  ]
})
export class NftsModule { }
