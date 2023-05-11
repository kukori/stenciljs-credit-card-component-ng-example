import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreditCardComponentsNgModule } from 'credit-card-components-angular/dist/credit-card-components-ng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ExpirationComponent } from './expiration/expiration.component';
import { CvvComponent } from './cvv/cvv.component';
import { CardHolderComponent } from './card-holder/card-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    ExpirationComponent,
    CvvComponent,
    CardHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreditCardComponentsNgModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
