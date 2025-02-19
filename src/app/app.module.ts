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
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ZonelessExampleComponent } from './zoneless-example/zoneless-example.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';


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
    ContentexampleComponent,
    WeatherComponent,
    ZonelessExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    provideAnimationsAsync(),
    provideExperimentalZonelessChangeDetection()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
