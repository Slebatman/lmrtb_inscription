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

  // Submit()
  submit() {
  }

}
