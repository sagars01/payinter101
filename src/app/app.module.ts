import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistsComponent } from './userlists/userlists.component';
import { UserComponent } from './userlists/user/user.component';
import { MaterialModule } from './material.module';
import { MainService } from './datasource/main.service';

@NgModule({
  declarations: [
    AppComponent,
    UserlistsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
