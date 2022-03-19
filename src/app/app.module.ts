import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    SkillsComponent,
    ProjectsComponent,
    HeaderComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
