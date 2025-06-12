import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {DiscGolfContainer} from "./disc-golf/disc-golf.container";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DiscGolfContainer,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
