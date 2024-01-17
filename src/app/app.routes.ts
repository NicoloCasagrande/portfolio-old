import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'works', component: WorksComponent },
];
