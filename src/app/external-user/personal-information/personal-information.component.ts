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

  // Submit()
  submit() {
  }

}
