import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="stack" class="py-24 bg-surface/30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-text-primary mb-12 border-l-4 border-accent pl-4">
                Technical Expertise
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Backend -->
                <div class="bg-surface p-6 rounded-lg border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-2">
                    <div class="h-10 w-10 rounded bg-accent/10 flex items-center justify-center mb-4 text-accent">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-text-primary mb-2">Backend Engineering</h3>
                    <p class="text-sm text-text-secondary mb-4">Robust, scalable server-side solutions.</p>
                    <ul class="space-y-2">
                        <li class="flex items-center text-sm text-text-secondary">
                            <span class="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>Java 17+ / 21
                        </li>
                        <li class="flex items-center text-sm text-text-secondary">
                            <span class="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>Spring Boot 3
                        </li>
                        <li class="flex items-center text-sm text-text-secondary">
                            <span class="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>Domain-Driven Design (DDD)
                        </li>
                        <li class="flex items-center text-sm text-text-secondary">
                            <span class="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>Microservices
                        </li>
                    </ul>
                </div>

                <!-- Infrastructure -->
                <div class="bg-surface p-6 rounded-lg border border-white/5 hover:border-success/30 transition-all duration-300 hover:-translate-y-2">
                     <div class="h-10 w-10 rounded bg-success/10 flex items-center justify-center mb-4 text-success">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-text-primary mb-2">Infrastructure & Data</h3>
                    <p class="text-sm text-text-secondary mb-4">Reliable deployment and storage.</p>
                    <ul class="space-y-2">
                        <li class="flex items-center text-sm text-text-secondary">
                            <span class="w-1.5 h-1.5 bg-success rounded-full mr-2"></span>PostgreSQL / Redis
                        </li>
                        <li class="flex items-center text-sm text-text-secondary">
                            <span class="w-1.5 h-1.5 bg-success rounded-full mr-2"></span>Docker & Kubernetes
                        </li>
                        <li class="flex items-center text-sm text-text-secondary">
                            <span class="w-1.5 h-1.5 bg-success rounded-full mr-2"></span>Linux System Admin
                        </li>
                        <li class="flex items-center text-sm text-text-secondary">
                            <span class="w-1.5 h-1.5 bg-success rounded-full mr-2"></span>CI/CD Pipelines
                        </li>
                    </ul>
                </div>

                <!-- Frontend -->
                <div class="bg-surface p-6 rounded-lg border border-white/5 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-2">
                     <div class="h-10 w-10 rounded bg-blue-400/10 flex items-center justify-center mb-4 text-blue-400">
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-text-primary mb-2">Frontend Modernization</h3>
                    <p class="text-sm text-text-secondary mb-4">Clean, responsive user interfaces.</p>
                    <ul class="space-y-2">
                        <li class="flex items-center text-sm text-text-secondary">
                            <span class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Angular 17+ (Signals)
                        </li>
                        <li class="flex items-center text-sm text-text-secondary">
                            <span class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Tailwind CSS
                        </li>
                        <li class="flex items-center text-sm text-text-secondary">
                            <span class="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>TypeScript Strict Mode
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  `
})
export class TechStackComponent {}
