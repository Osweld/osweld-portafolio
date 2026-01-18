import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="group relative bg-surface border border-white/5 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-accent/5">
      <div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div class="relative p-6 flex-1 flex flex-col">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
            {{ project().title }}
          </h3>
          <a [href]="project().link" target="_blank" class="text-text-secondary hover:text-accent">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m-6-6L10 14"></path></svg>
          </a>
        </div>
        
        <p class="text-text-secondary leading-relaxed mb-6 flex-1">
          {{ project().description }}
        </p>
        
        <div class="mt-auto">
          <div class="flex flex-wrap gap-2">
            @for (tag of project().tags; track tag) {
              <span class="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-primary-bg text-accent border border-accent/20">
                {{ tag }}
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
