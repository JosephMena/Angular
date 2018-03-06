import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {PersonaComponent} from './persona/persona.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'humanos', component: PersonaComponent},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
