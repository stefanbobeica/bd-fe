import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioModule } from '@formio/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EchipaComponent } from './echipa/echipa.component';
import { AdminComponent } from './admin/admin.component';
import { RezultateComponent } from './rezultate/rezultate.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EchipaComponent,
    AdminComponent,
    RezultateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
