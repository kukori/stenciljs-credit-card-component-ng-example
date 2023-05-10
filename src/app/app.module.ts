import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreditCardComponentsNgModule } from 'credit-card-components-angular/dist/credit-card-components-ng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreditCardComponentsNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
