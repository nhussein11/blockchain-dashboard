import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavsComponent } from './pages/favs/favs.component';
import { FavsDetailsComponent } from './pages/favs-details/favs-details.component';

import {CarouselModule} from 'primeng/carousel';
import  {ButtonModule} from 'primeng/button'
import { FavsRoutingModule } from './favs-routing.module';


@NgModule({
  declarations: [
    FavsComponent,
    FavsDetailsComponent
  ],
  imports: [
    CommonModule,
    FavsRoutingModule,

    CarouselModule,
    ButtonModule
  ]
})
export class FavsModule { }
