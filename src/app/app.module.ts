import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegsiterComponent } from './regsiter/regsiter.component';
import { NavbarComponent } from './navbar/navbar.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    RegsiterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
