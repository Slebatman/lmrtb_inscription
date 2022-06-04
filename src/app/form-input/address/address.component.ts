import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  // Input & Output data
  @Input() street : string = '';
  @Input() homeNumber : string = '';
  @Input() postalCode : number = 0;
  @Input() village : string = '';

  @Output() streetEvent = new EventEmitter<string>();
  @Output() homeNumberEvent = new EventEmitter<string>();
  @Output() postalCodeEvent = new EventEmitter<number>();
  @Output() villageEvent = new EventEmitter<string>();

  // Constructor
  constructor() { }

  // Send data to father
  updateStreet(value: string) {
    this.streetEvent.emit(value);
  }

  updateHomeNumber(value: string) {
    this.homeNumberEvent.emit(value);
  }

  updatePostalCode(value: number) {
    this.postalCodeEvent.emit(value);
  }

  updateVillage(value: string) {
    this.villageEvent.emit(value);
  }

}
