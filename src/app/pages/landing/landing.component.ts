import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent implements OnInit, OnDestroy {
  hoveredPanel: 'roleplay' | 'rpg' | null = null;
  isRpgPopupOpen = false;

  openRpgPopup() { this.isRpgPopupOpen = true; }
  closeRpgPopup() { this.isRpgPopupOpen = false; }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.style.overflow = 'hidden';
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.style.overflow = '';
    }
  }
}
