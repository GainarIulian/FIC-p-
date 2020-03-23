import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';


import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';



@NgModule({  
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent,  
    ProductDetailComponent
  ]

})
export class ProductModule { }
