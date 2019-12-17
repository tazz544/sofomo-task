import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {AdvancedRoutingModule} from '@app/modules/advanced/advanced-routing.module';

import * as Pages from './pages';

@NgModule({
  declarations: [
    Pages.AdvancedPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdvancedRoutingModule
  ]
})
export class AdvancedModule {
}
