import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { NGXBoostrapModule } from './ngx-bootstrap.module';

@NgModule({
  imports: [
    MaterialModule,
    NGXBoostrapModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AgGridModule.withComponents([]),
  ],
  exports: [
    MaterialModule,
    NGXBoostrapModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }