import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResearchComponent } from './research/research.component';
import { HomeComponent } from './home/home.component';
import { HeaderLineComponent } from './shared/header-line/header-line.component';
import { SubHeaderLineComponent } from './shared/sub-header-line/sub-header-line.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'research', component: ResearchComponent },
  {path:'test', component: SubHeaderLineComponent}
];
