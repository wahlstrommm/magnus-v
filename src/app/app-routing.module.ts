import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
