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
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'overview', component: ResearchComponent },
  {path:'publications', component: PublicationsComponent},
  {path:'test2', component: ResearchComponent},
];
