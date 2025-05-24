import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResearchComponent } from './research/research.component';
import { HomeComponent } from './home/home.component';
import { HeaderLineComponent } from './shared/header-line/header-line.component';
import { SubHeaderLineComponent } from './shared/sub-header-line/sub-header-line.component';
import { PublicationsComponent } from './publications/publications.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'academic-portforlio/about', component: AboutComponent },
  { path: 'academic-portforlio/contact', component: ContactComponent },
  { path: 'academic-portforlio/overview', component: ResearchComponent },
  {path:'academic-portforlio/publications', component: PublicationsComponent},
  {path:'academic-portforlio/test2', component: ResearchComponent},
];
