import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {SimpleRoutingModule} from '@app/modules/simple/simple-routing.module';

import * as Shared from './shared';
import * as Pages from './pages';

@NgModule({
  declarations: [
    Pages.SimplePageComponent,
    Shared.GraphSimpleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SimpleRoutingModule
  ]
})
export class SimpleModule {
}
