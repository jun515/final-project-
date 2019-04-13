import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { router } from './app.router';
import { AppService } from './app.service'
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    router,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
