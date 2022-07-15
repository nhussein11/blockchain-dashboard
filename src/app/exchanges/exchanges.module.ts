import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangesComponentComponent } from './exchanges-component/exchanges-component.component';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



@NgModule({
  declarations: [
    ExchangesComponentComponent
  ],
  imports: [
    CommonModule,

    InputTextModule,
    ProgressSpinnerModule
  ]
})
export class ExchangesModule { }
