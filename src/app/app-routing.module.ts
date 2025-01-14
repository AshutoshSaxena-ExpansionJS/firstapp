import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationOperatorsComponent } from './creation-operators/creation-operators.component';
import { TransformationOperatorsComponent } from './transformation-operators/transformation-operators.component';
import { FilteringOperatorsComponent } from './filtering-operators/filtering-operators.component';
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';

const routes: Routes = [
  { path: '', redirectTo: '/creation-operators', pathMatch: 'full' },
  { path: 'creation-operators', component: CreationOperatorsComponent },
  { path: 'transformation-operators', component: TransformationOperatorsComponent },
  { path: 'filtering-operators', component: FilteringOperatorsComponent },
  { path: 'combination-operators', component: CombinationOperatorsComponent },
  { path: '**', redirectTo: '/creation-operators' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
