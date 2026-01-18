import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 w-full z-50 bg-primary-bg/80 backdrop-blur-md border-b border-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <span class="font-mono text-xl font-bold text-accent tracking-tighter">
              &lt;OSWELD/&gt;
            </span>
          </div>
          <nav class="hidden md:block">
            <ul class="flex space-x-8">
              <li><a href="#projects" class="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#stack" class="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Stack</a></li>
              <li><a href="#about" class="text-sm font-medium text-text-secondary hover:text-accent transition-colors">About</a></li>
            </ul>
          </nav>
          <div class="md:hidden">
            <button 
              type="button" 
              class="text-text-secondary hover:text-white focus:outline-none" 
              (click)="toggleMenu()"
              aria-controls="mobile-menu"
              [attr.aria-expanded]="isOpen()">
              <span class="sr-only">Open main menu</span>
              @if (!isOpen()) {
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              } @else {
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              }
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      @if (isOpen()) {
        <div class="md:hidden bg-primary-bg border-b border-surface" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#projects" (click)="toggleMenu()" class="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-white hover:bg-surface">Projects</a>
            <a href="#stack" (click)="toggleMenu()" class="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-white hover:bg-surface">Stack</a>
            <a href="#about" (click)="toggleMenu()" class="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-white hover:bg-surface">About</a>
          </div>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(value => !value);
  }
}
