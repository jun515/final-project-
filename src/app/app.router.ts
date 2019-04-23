import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
{ path: 'movies', component: MoviesComponent },
  { path: 'login', component: LoginComponent },
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);
