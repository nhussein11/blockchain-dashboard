import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavsRoutingModule } from './favs-routing.module';
import { PrimengModule } from '../primeng/primeng.module';

import { FavsComponent } from './pages/favs/favs.component';
import { FavsDetailsComponent } from './pages/favs-details/favs-details.component';



@NgModule({
  declarations: [
    FavsComponent,
    FavsDetailsComponent
  ],
  imports: [
    CommonModule,
    
    FavsRoutingModule,
    
    PrimengModule,
  ]
})
export class FavsModule { }
