import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
  keywords?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  
  private readonly defaultTitle = 'Osweld - Software Engineer Portfolio';
  private readonly defaultDesc = 'Software Engineer focused on Angular, Spring Boot, and Full Stack development.';
  private readonly defaultImage = 'assets/og-image.jpg';
  private readonly defaultUrl = 'https://osweld.dev/';

  constructor() {}

  updateSeo(config: Partial<SeoConfig> = {}) {
    // Title
    const title = config.title ? `${config.title} | Osweld` : this.defaultTitle;
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'title', content: title });
    // URL
    const url = config.url || this.defaultUrl;
    this.meta.updateTag({ property: 'og:url', content: url });

    // Keywords
    if (config.keywords && config.keywords.length > 0) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords.join(', ') });
    }
  }
}
