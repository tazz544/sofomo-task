import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import * as Layout from './layout';

@NgModule({
  declarations: [
    Layout.PageWrapperComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Layout.PageWrapperComponent,
    MatButtonModule,
    MatCardModule
  ]
})
export class SharedModule {
}
