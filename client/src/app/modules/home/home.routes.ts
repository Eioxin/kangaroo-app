import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.page';
import { AboutComponent } from './pages/about/about.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
