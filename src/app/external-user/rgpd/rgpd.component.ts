import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-rgpd',
  templateUrl: './rgpd.component.html',
  styleUrls: ['./rgpd.component.css']
})
export class RGPDComponent {

  // Constructor
  constructor(private router : Router) { }

  // FormControl
  check = new FormControl(false);

  // Next function
  next() {
    this.router.navigate(['external/welcome'])
  }

  updateCheck() {
    console.log(this.check.value)
  }
}
