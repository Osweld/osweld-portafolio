import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="pt-32 pb-16 sm:pt-48 sm:pb-24 lg:pb-32 overflow-hidden">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div class="inline-flex items-center px-3 py-1 rounded-full border border-surface bg-surface/50 mb-6 animate-fade-in-up">
              <span class="flex h-2 w-2 rounded-full bg-success mr-2 animate-pulse"></span>
              <span class="text-xs font-mono text-text-secondary uppercase tracking-wider">Open to Work</span>
            </div>
            <h1 class="text-4xl tracking-tight font-extrabold text-text-primary sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl animate-fade-in-up delay-100">
              Transforming ideas into <span class="text-accent">working software</span> with <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-success">Modern Web Technologies</span>
            </h1>
            <p class="mt-3 text-base text-text-secondary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light leading-relaxed animate-fade-in-up delay-200">
              Aspiring Software Engineer passionate about full-stack development. I build reliable applications while continuously learning best practices in architecture and design.
            </p>
            <div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 animate-fade-in-up delay-300">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="#projects" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-bg bg-accent hover:bg-opacity-90 md:py-4 md:text-lg transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]">
                  View Projects
                </a>
                <a href="https://drive.google.com/file/d/1UX8EqFUGxkOdsIaJLZZ-GwUIenTrzhnc/view?usp=sharing" class="w-full flex items-center justify-center px-8 py-3 border border-surface text-base font-medium rounded-md text-text-primary bg-transparent hover:bg-surface md:py-4 md:text-lg transition-all font-mono">
                  Download CV
                </a>
              </div>
              
              <div class="mt-8 flex items-center justify-center lg:justify-start gap-6">
                <a href="https://github.com/Osweld" target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="GitHub">
                  <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/german-os-reyes/" target="_blank" rel="noopener noreferrer" class="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
                  <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:germanreyesdeveloper@gmail.com" class="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="Email">
                  <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
          <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
             <!-- Abstract tech illustration placeholder using pure CSS/SVG -->
             <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md animate-float delay-500">
                <div class="relative block w-full bg-surface rounded-lg overflow-hidden border border-surface group">
                   <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-50"></div>
                   <div class="p-8 font-mono text-sm leading-6 text-text-secondary">
                      <div class="flex space-x-2 mb-4">
                         <div class="w-3 h-3 rounded-full bg-red-500"></div>
                         <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                         <div class="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <p><span class="text-accent">@Service</span></p>
                      <p><span class="text-purple-400">public class</span> <span class="text-yellow-200"> PaymentService</span> {{ '{' }}</p>
                      <p class="pl-4"><span class="text-purple-400">private final</span> TransactionRepository repo;</p>
                      <br>
                      <p class="pl-4"><span class="text-purple-400">public</span> <span class="text-yellow-200"> Result</span> process(Order order) {{ '{' }}</p>
                      <p class="pl-8"><span class="text-text-secondary/50">// Secure transaction logic</span></p>
                      <p class="pl-8"><span class="text-purple-400">return</span> repo.save(order);</p>
                      <p class="pl-4">{{ '}' }}</p>
                      <p>{{ '}' }}</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
