
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegsiterComponent} from './regsiter/regsiter.component';

const APP_ROUTES: Routes = [
  { path : 'register' , component: RegsiterComponent },
  { path : '' , component: RegsiterComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
