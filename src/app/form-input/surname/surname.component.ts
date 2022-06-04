import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-surname',
  templateUrl: './surname.component.html',
  styleUrls: ['./surname.component.css']
})
export class SurnameComponent {

  // Input & Output data
  @Input() surname : string = '';
  @Input() required : boolean = false;
  
  @Output() surnameEvent = new EventEmitter<string>();

  // Constructor
  constructor() { }

  // Send data to father
  updateSurname(value: string) {
    this.surnameEvent.emit(value);
  }

}
