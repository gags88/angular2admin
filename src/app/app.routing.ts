
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './regsiter/regsiter.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {LoginComponent} from './login/login.component';

const APP_ROUTES: Routes = [
  { path : '' , redirectTo: '/login' , pathMatch: 'full'},
  { path : 'login' , component: LoginComponent },
  { path : 'register' , component: RegisterComponent },
  { path : 'not-found' , component: ErrorPageComponent},
  { path : '**', redirectTo: '/not-found'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
