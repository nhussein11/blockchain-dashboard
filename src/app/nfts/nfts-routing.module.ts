import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NftsComponent } from './pages/nfts-component/nfts.component';

const routes : Routes =[
  {
    path:'',
    children: [
      {path:'nfts', component: NftsComponent},
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],exports:[RouterModule]
})
export class NftsRoutingModule { }
