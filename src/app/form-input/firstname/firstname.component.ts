import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.component.html',
  styleUrls: ['./firstname.component.css']
})
export class FirstnameComponent {

  // Output data
  @Output() firstnameEvent = new EventEmitter<string>();

  // Constructor
  constructor() { }

  // Send data to father
  updateFirstName(value: string) {
    this.firstnameEvent.emit(value);
  }

}
