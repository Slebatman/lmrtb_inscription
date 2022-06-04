import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  // Validity
  firstnameValidity : boolean = false;
  surnameValidity : boolean = false;
  birthdayValidity : boolean = true; // Always true
  streetValidity : boolean = false;
  homeNumberValidity : boolean = false;
  postalCodeValidity : boolean = false;
  villageValidity : boolean = false;

  // Constructor 
  constructor(
    private router : Router
  ) { }

  // OnInit
  ngOnInit(): void {
  }

  // Submit()
  submit() {
    if ( this.firstnameValidity 
      && this.surnameValidity 
      && this.birthdayValidity 
      && this.streetValidity 
      && this.homeNumberValidity 
      && this.postalCodeValidity
      &&this.villageValidity) {
        this.router.navigate(['external/RGPD'])
      } else {
        console.log("Informations missing")
       
      }
  }


  /* 
    ----- GET DATA FROM CHILD -----
  */

  // Retrive FIRSTNAME from child
  getFirstname(firstname : string) { this.firstname = firstname; }
  getFirstnameValidity(validity : boolean) { this.firstnameValidity = validity; }

  // Retrive FIRSTNAME from child
  getSurname(surname : string) { this.surname = surname; }
  getSurnameValidity(validity : boolean) { this.surnameValidity = validity; }

  // Retrive BIRTHDATE from child
  getBirthday(birthday : Date) { this.birthday = birthday; }

  // Retrive STREET from child
  getStreet(street : string) { this.street = street; }
  getStreetValidity(validity : boolean) { this.streetValidity = validity; }

  // Retrive HOME NUMBER from child
  getHomeNumber(homeNumber : string) { this.homeNumber = homeNumber; }
  getHomeNumberValidity(validity : boolean) { this.homeNumberValidity = validity; }

  // Retrive POSTAL CODE from child
  getPostalCode(postalCode : number) { this.postalCode = postalCode; }
  getPostalCodeValidity(validity : boolean) { this.postalCodeValidity = validity; }

  // Retrive VILLAGE from child
  getVillage(village : string) { this.village = village; }
  getVillageValidity(validity : boolean) { this.villageValidity = validity; }

}
