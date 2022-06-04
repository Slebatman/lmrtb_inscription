import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import 'moment/locale/fr';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class BirthdayComponent implements OnInit {

  // Input & Output data
  @Input() birthday : Date = new Date();
  @Input() required : boolean = false;
  
  @Output() birthdayEvent = new EventEmitter<Date>();

  // Variables
  date = new FormControl(new Date());

  // Constructor
  constructor() { }

  // OnInit
  ngOnInit() {
    this.date.setValue(this.birthday);
  }

  // Send data to father
  updateBirthday(event: MatDatepickerInputEvent<Date>) {
    if (event.value) this.birthdayEvent.emit(event.value);
  }

}
