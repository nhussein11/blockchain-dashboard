import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },

  {
    path:'',
    redirectTo:'',
    pathMatch: 'full'
  }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes,{
      enableTracing:true,
      preloadingStrategy:PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
