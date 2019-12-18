import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatTooltipModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import * as Components from './components';
import * as Layout from './layout';
import * as Loaders from './loaders';

@NgModule({
  declarations: [
    Layout.PageWrapperComponent,
    Components.GraphItemComponent,
    Components.BackToHomeComponent,
    Loaders.SpinnerComponent,
    Loaders.PageLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Layout.PageWrapperComponent,
    Components.GraphItemComponent,
    Components.BackToHomeComponent,
    Loaders.SpinnerComponent,
    Loaders.PageLoaderComponent,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule
  ]
})
export class SharedModule {
}
