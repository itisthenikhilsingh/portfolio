import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Page Components

import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Projects } from './pages/projects/projects';
import { Resume } from './pages/resume/resume';
import { Contact } from './pages/contact/contact';
import { Error } from './pages/error/error';
import { Home } from './pages/home/home';

export const routes: Routes = [
  // Main landing page (with sidebar + navbar + sections)
  { path: '', component: Home },

  // Individual routes for navbar links

  { path: 'about', component: Home },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'resume', component: Resume },
  { path: 'contact', component: Contact },

  // Wildcard (404 page)
  { path: '**', component: Error }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
