import { CommonModule, DOCUMENT, NgClass } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
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
  
  // 'roleplay' is the primary default project
  currentSubproject: 'roleplay' | 'rpg' = 'roleplay';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  setSubproject(project: 'roleplay' | 'rpg') {
    this.currentSubproject = project;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    if (this.isMobileMenuOpen) {
      this.document.body.style.overflow = 'hidden';
    } else {
      this.document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
    this.document.body.style.overflow = 'auto';
  }
}