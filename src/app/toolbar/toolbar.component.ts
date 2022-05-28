import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  // Variables
  destroyed = new Subject<void>();
  title: string = '';

  // Create a map to display breakpoint label
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'Gestion des inscriptions'],
    [Breakpoints.Small, 'Les MaRosTin.Bel - Gestion des inscriptions'],
    [Breakpoints.Medium, 'Les MaRosTin.Bel - Gestion des inscriptions'],
    [Breakpoints.Large, 'Les MaRosTin.Bel - Gestion des inscriptions'],
    [Breakpoints.XLarge, 'Les MaRosTin.Bel - Gestion des inscriptions'],
  ]);
  
  // Logo src
  logoSrc = './../assets/logo/logo_mrtb_bleu.png';

  // Constructor
  constructor(private router : Router, 
    breakpointObserver: BreakpointObserver) 
  {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.title = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }
  
  // Routing
  help() { this.router.navigate(['']); }

}