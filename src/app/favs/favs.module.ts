import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavsComponent } from './favs/favs.component';
import { FavsDetailsComponent } from './favs-details/favs-details.component';

import {CarouselModule} from 'primeng/carousel';
import  {ButtonModule} from 'primeng/button'


@NgModule({
  declarations: [
    FavsComponent,
    FavsDetailsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule
  ]
})
export class FavsModule { }
