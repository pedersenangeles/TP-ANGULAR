import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AlfajoresList } from './alfajor-list/alfajor-list';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AldinaAbout } from './aldina-about/aldina-about';
import { AldinaAlfajores } from './aldina-alfajores/aldina-alfajores';
import { Cart } from './cart/cart';
import { InputInteger } from './input-integer/input-integer';
import { HttpClientModule } from '@angular/common/http';
import { SignUp } from './sign-up/sign-up';

@NgModule({
  declarations: [
    App,
    AlfajoresList,
    AldinaAbout,
    AldinaAlfajores,
    Cart,
    InputInteger,
    SignUp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
