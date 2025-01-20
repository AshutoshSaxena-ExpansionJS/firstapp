import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ContentexampleComponent } from './contentexample/contentexample.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canDeactivate: [AuthGuard],
    children: [
      { path: 'creation-operators', component: CreationOperatorsComponent },
      { path: 'transformation-operators', component: TransformationOperatorsComponent },
      { path: 'filtering-operators', component: FilteringOperatorsComponent },
      { path: 'combination-operators', component: CombinationOperatorsComponent },
      { path: 'contentexample', component: ContentexampleComponent },
      {path:  'weather', component: WeatherComponent},
      { path: '**', redirectTo: '/creation-operators' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }