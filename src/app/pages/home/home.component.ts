import { CommonModule, DOCUMENT, NgClass } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    NgClass,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    // Toggle scrolling on the body
    if (this.isMobileMenuOpen) {
      this.document.body.style.overflow = 'hidden';
    } else {
      this.document.body.style.overflow = 'auto';
    }
  }

  // Helper to close menu when a link is clicked
  closeMenu() {
    this.isMobileMenuOpen = false;
    this.document.body.style.overflow = 'auto';
  }

}
