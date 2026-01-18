import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { ProjectCardComponent, Project } from './components/project-card.component';
import { TechStackComponent } from './components/tech-stack.component';
import { AboutComponent } from './components/about.component';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent, 
    HeroComponent, 
    ProjectCardComponent, 
    TechStackComponent, 
    AboutComponent
  ],
  templateUrl: './app.html'
})
export class App {
  private readonly seoService = inject(SeoService);
  year = signal(new Date().getFullYear());

  constructor() {
    this.seoService.updateSeo();
  }
  
  projects = signal<Project[]>([
    {
      title: 'OnlyChat',
      description: 'Real-time messaging platform built with WebSockets and STOMP. Features secure JWT authentication, PostgreSQL persistence, user management, and email notifications.',
      tags: ['Spring Boot', 'Angular', 'WebSocket', 'PostgreSQL', 'JWT', 'Tailwind'],
      link: 'https://github.com/Osweld/portfolio/blob/main/projects/onlychat.md'
    }
  ]);
}
