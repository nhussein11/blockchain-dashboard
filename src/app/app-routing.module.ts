import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
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
      enableTracing:false,
      preloadingStrategy:PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
