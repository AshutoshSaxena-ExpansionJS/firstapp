import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizeFirstLastPipe } from './capitalize-first-last.pipe';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { HighlightDirective } from './highlight.directive';
import { ReversePipe } from './reverse.pipe';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ContentexampleComponent } from './contentexample/contentexample.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from './validators/custom-validators';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizeFirstLastPipe,
    DynamicListComponent,
    ItemDisplayComponent,
    HighlightDirective,
    ReversePipe,
    CreationOperatorsComponent,
    TransformationOperatorsComponent,
    FilteringOperatorsComponent,
    CombinationOperatorsComponent,
    RegistrationComponent,
    LoginComponent,
    ContentexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
