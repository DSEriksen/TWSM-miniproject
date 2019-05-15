import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {animation: 'home'}
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: {animation: 'resume'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {animation: 'contact'}
  }
];

