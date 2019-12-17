import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {HomeRoutingModule} from '@app/modules/home/home-routing.module';

import * as Pages from './pages';

@NgModule({
  declarations: [
    Pages.HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
