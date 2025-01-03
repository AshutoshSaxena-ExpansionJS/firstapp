import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizeFirstLastPipe } from './capitalize-first-last.pipe';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeFirstLastPipe,
    DynamicListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
