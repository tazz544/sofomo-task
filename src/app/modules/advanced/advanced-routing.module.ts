import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageWrapperComponent} from '@app/shared/layout';

import * as Pages from './pages';

const routes: Routes = [
  {
    path: '',
    component: PageWrapperComponent,
    children: [
      {
        path: '',
        component: Pages.AdvancedPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdvancedRoutingModule {
}
