import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'simple',
    loadChildren: () => import('./modules/simple/simple.module').then(m => m.SimpleModule)
  },
  {
    path: 'advanced',
    loadChildren: () => import('./modules/advanced/advanced.module').then(m => m.AdvancedModule)
  },
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
