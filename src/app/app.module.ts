import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button.component';

@NgModule({
  declarations: [AppComponent, AuthButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'elkdanger.eu.auth0.com',
      clientId: 'TgqxTDJFG2G3H5TjqvIEEVL5i6IcZGye',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
