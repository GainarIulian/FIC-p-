import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarColumn } from './columns/starColumn.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarColumn,    
    ConvertToSpacesPipe
  ],
  exports: [
    StarColumn,
    ConvertToSpacesPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }