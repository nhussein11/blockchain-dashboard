import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavsComponent } from './pages/favs/favs.component';
import { FavsDetailsComponent } from './pages/favs-details/favs-details.component';

import { FavsRoutingModule } from './favs-routing.module';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    FavsComponent,
    FavsDetailsComponent
  ],
  imports: [
    CommonModule,
    
    PrimengModule,

    FavsRoutingModule,
  ]
})
export class FavsModule { }
