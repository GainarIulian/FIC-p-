import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarColumn } from './columns/starColumn.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarColumn
  ],
  exports: [
    StarColumn,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }