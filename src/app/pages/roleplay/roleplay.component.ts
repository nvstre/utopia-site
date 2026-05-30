import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-roleplay',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './roleplay.component.html',
  styleUrl: './roleplay.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class RoleplayComponent implements AfterViewInit, OnDestroy {
  @ViewChild('siteHeader') headerRef!: ElementRef<HTMLElement>;

  private observer?: IntersectionObserver;
  private scrollHandler = () => {
    const header = this.headerRef?.nativeElement;
    if (!header) return;
    header.style.background = window.scrollY > 40
      ? 'rgba(6,8,16,0.97)'
      : 'rgba(6,8,16,0.90)';
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer!.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-reveal]').forEach(el => this.observer!.observe(el));
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }
}
