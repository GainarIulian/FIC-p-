import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home/home-page.component';
import { ProductModule } from './products/product.module';
import { ProductRoutingModule } from './products/product-routing.module';


@NgModule({ 
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
