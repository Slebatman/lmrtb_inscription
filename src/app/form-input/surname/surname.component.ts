import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-surname',
  templateUrl: './surname.component.html',
  styleUrls: ['./surname.component.css']
})
export class SurnameComponent implements OnInit {

  // Input & Output data
  @Input() surname : string = '';
  @Input() required : boolean = false;
  
  @Output() surnameEvent = new EventEmitter<string>();
  @Output() validityEvent = new EventEmitter<boolean>();

  // Constructor
  constructor(private _snackBar: MatSnackBar) { }

  // Validator
  surnameValidator!: FormControl;

  ngOnInit(): void {
    // Init validator FormControl
    this.surnameValidator = new FormControl(this.surname, [
      Validators.pattern('^[ A-Za-z\é\è\ê\-]+$')
    ])  

    // Add validators only if input is required
    if(this.required) {
      this.surnameValidator.addValidators(Validators.required)
      this.surnameValidator.addValidators(Validators.minLength(3))
    }
  }

  // Send data to father
  updateSurname(value: string) {
    //Tell father validity is ok
    this.validityEvent.emit(true);

    // Check if input is required
    if(this.required) {
      if(this.surnameValidator.errors?.['required']) this.openSnackBar("Le champ 'Nom' est obligaoire")
      if(this.surnameValidator.errors?.['minlength']) this.openSnackBar("Le nom doit être suppérieur à 3 caractères")
    }
    
    // Check pattern
    if(this.surnameValidator.errors?.['pattern']) this.openSnackBar("Format invalide (pas de symbole)")

    // Send data to father  
    this.surnameEvent.emit(value);
  }

  // Open SnackBar
  openSnackBar(message: string) {
    // Tell father validity not ok
    this.validityEvent.emit(false);

    // Show snackbar
    this._snackBar.open(message, 'Fermer', {
      duration: 3000
    });
  }

}
