import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  // Empty 
  firstname : string = '';
  surname : string = '';
  birthday : Date = new Date('2015-01-01T03:24:00');
  street : string = '';
  homeNumber : string = '';
  postalCode : number = 0;
  village : string = '';

  // Constructor 
  constructor() { }

  // OnInit
  ngOnInit(): void {
  }

  // Retrive FIRSTNAME from child
  getFirstname(firstname : string) {
    this.firstname = firstname;
  }

  // Retrive FIRSTNAME from child
  getSurname(surname : string) {
    this.surname = surname;
  }

  // Retrive BIRTHDATE from child
  getBirthday(birthday : Date) {
    this.birthday = birthday;
  }

  // Retrive STREET from child
  getStreet(street : string) {
    this.street = street;
  }

  // Retrive HOME NUMBER from child
  getHomeNumber(homeNumber : string) {
    this.homeNumber = homeNumber;
  }

  // Retrive POSTAL CODE from child
  getPostalCode(postalCode : number) {
    this.postalCode = postalCode;
  }

  // Retrive VILLAGE from child
  getVillage(village : string) {
    this.village = village;
  }

  // Submit()
  submit() {
  }

}
