import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  // Constructor
  constructor(private router : Router) { }

  // Next function
  next() {
    this.router.navigate(['external/personal-information'])
  }
  
}
