import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { FavsComponent } from './pages/favs/favs.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'favs', component: FavsComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],exports:[RouterModule]
})

export class FavsRoutingModule { }
