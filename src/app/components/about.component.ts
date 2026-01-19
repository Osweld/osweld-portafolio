import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-24 bg-primary-bg overflow-hidden relative">
      <!-- Background elements -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-success/5 rounded-full blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
           <div>
              <h2 class="text-3xl font-extrabold text-text-primary mb-6">
                Passionate & Driven
              </h2>
              <div class="prose prose-invert text-text-secondary">
                <p class="mb-4 text-lg">
                  I am a motivated software engineer eager to start my professional journey. My focus is on writing clean, maintainable code and solving real-world problems through technology.
                </p>
                <p class="mb-6">
                  Currently honing my skills in <span class="text-accent font-medium">Full Stack Development</span> with Angular and Spring Boot. I am a quick learner who values feedback and collaboration to grow as a developer.
                </p>
                
                <h3 class="text-xl font-bold text-white mt-8 mb-4">Key Professional Attributes</h3>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg class="h-6 w-6 text-success flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong class="text-white">English Proficiency (A2):</strong> Capable of reading technical documentation and basic communication.</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="h-6 w-6 text-success flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong class="text-white">Remote Ready:</strong> Fully equipped home office and disciplined workflow for asynchronous distributed work.</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="h-6 w-6 text-success flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong class="text-white">Continuous Learner:</strong> Actively staying updated with the Spring ecosystem and Angular's rapid evolution.</span>
                  </li>
                </ul>
              </div>
           </div>
           
           <div class="mt-12 lg:mt-0 relative">
              <div class="relative rounded-2xl bg-surface border border-white/10 p-2 sm:p-6 shadow-2xl">
                 <div class="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                 <!-- Decorative terminal-like block -->
                 <div class="bg-primary-bg rounded-lg overflow-hidden border border-white/5 font-mono text-sm shadow-inner">
                    <div class="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center space-x-2">
                       <div class="w-3 h-3 rounded-full bg-red-500"></div>
                       <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div class="w-3 h-3 rounded-full bg-green-500"></div>
                       <div class="ml-4 text-xs text-text-secondary">profile.json</div>
                    </div>
                    <div class="p-4 text-green-400">
                       <span class="text-purple-400">{{ '{' }}</span><br>
                       &nbsp;&nbsp;<span class="text-accent">"role"</span>: <span class="text-yellow-200">"Junior Software Engineer"</span>,<br>
                       &nbsp;&nbsp;<span class="text-accent">"location"</span>: <span class="text-yellow-200">"Remote / Hybrid"</span>,<br>
                       &nbsp;&nbsp;<span class="text-accent">"status"</span>: <span class="text-yellow-200">"Open to Work"</span>,<br>
                       &nbsp;&nbsp;<span class="text-accent">"skills"</span>: <span class="text-purple-400">[</span><br>
                       &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-yellow-200">"Java"</span>,<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-yellow-200">"Spring Boot"</span>,<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-yellow-200">"Angular"</span>,<br>
                       &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-yellow-200">"Docker"</span><br>
                       &nbsp;&nbsp;<span class="text-purple-400">]</span><br>
                       <span class="text-purple-400">{{ '}' }}</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
