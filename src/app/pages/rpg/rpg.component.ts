import { CommonModule, DOCUMENT, NgClass } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rpg',
  standalone: true,
  imports: [RouterLink, NgClass, CommonModule],
  templateUrl: './rpg.component.html',
})
export class RpgComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
    this.document.body.style.overflow = 'auto';
  }
}
