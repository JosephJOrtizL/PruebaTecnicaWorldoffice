import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from './shared/components/atoms/alert/alert.module';
import { HeaderModule } from './shared/components/molecules/header/header.module';
import { LoginGuard } from './core/guards/login.guard';
import { DashBoardGuard } from './core/guards/dashboard.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AlertModule,
    HeaderModule
  ],
  providers: [
    LoginGuard,
    DashBoardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
