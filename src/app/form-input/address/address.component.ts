import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  // Input & Output data
  @Input() street : string = '';
  @Input() homeNumber : string = '';
  @Input() postalCode : number = 0;
  @Input() village : string = '';
  @Input() required : boolean = false;

  @Output() streetEvent = new EventEmitter<string>();
  @Output() homeNumberEvent = new EventEmitter<string>();
  @Output() postalCodeEvent = new EventEmitter<number>();
  @Output() villageEvent = new EventEmitter<string>();

  @Output() streetValidityEvent = new EventEmitter<boolean>();
  @Output() homeNumberValidityEvent = new EventEmitter<boolean>();
  @Output() postalCodeValidityEvent = new EventEmitter<boolean>();
  @Output() villageValidityEvent = new EventEmitter<boolean>();

  // Constructor
  constructor(private _snackBar: MatSnackBar) { }

  // Validator
  streetValidator!: FormControl;
  homeNumberValidator!: FormControl;
  postalCodeValidator!: FormControl;
  villageValidator!: FormControl;

  ngOnInit(): void {
    // Init validator FormControl
    this.streetValidator = new FormControl(this.street, [ Validators.pattern('^[ A-Za-z\é\è\ê\-]+$')])  
    this.homeNumberValidator = new FormControl(this.homeNumber, [ Validators.pattern('^[ A-Za-z0-9\é\è\ê\-]+$')])  
    this.postalCodeValidator = new FormControl(this.postalCode, [ Validators.pattern('^[0-9]+$')])  
    this.villageValidator = new FormControl(this.village, [ Validators.pattern('^[ A-Za-z\é\è\ê\-]+$')])  

    // Add validators only if input is required
    if(this.required) {
      this.streetValidator.addValidators(Validators.required)
      this.streetValidator.addValidators(Validators.minLength(3))

      this.homeNumberValidator.addValidators(Validators.required)
      this.homeNumberValidator.addValidators(Validators.minLength(1))

      this.postalCodeValidator.addValidators(Validators.required)
      this.postalCodeValidator.addValidators(Validators.minLength(4))

      this.villageValidator.addValidators(Validators.required)
      this.villageValidator.addValidators(Validators.minLength(3))
    }
  }

  // STREET
  updateStreet(value: string) {
    //Tell father validity is ok
    this.streetValidityEvent.emit(true);

    // Check if input is required
    if(this.required) {
      if(this.streetValidator.errors?.['required']) this.openSnackBar("Le champ 'Rue' est obligaoire")
      if(this.streetValidator.errors?.['minlength']) this.openSnackBar("La rue doit être suppérieur à 3 caractères")
    }
    
    // Check pattern
    if(this.streetValidator.errors?.['pattern']) this.openSnackBar("Format invalide (pas de symbole)")

    // Send data to father 
    this.streetEvent.emit(value);
  }

  // HOME NUMBER
  updateHomeNumber(value: string) {
    //Tell father validity is ok
    this.homeNumberValidityEvent.emit(true);

    // Check if input is required
    if(this.required) {
      if(this.homeNumberValidator.errors?.['required']) this.openSnackBar("Le champ 'Numéro' est obligaoire")
      if(this.homeNumberValidator.errors?.['minlength']) this.openSnackBar("Le numéro doit être suppérieur à 0 caractères")
    }
    
    // Check pattern
    if(this.homeNumberValidator.errors?.['pattern']) this.openSnackBar("Format invalide (pas de symbole)")

    // Send data to father 

    this.homeNumberEvent.emit(value);
  }

  // POSTAL CODE
  updatePostalCode(value: number) {
    //Tell father validity is ok
    this.postalCodeValidityEvent.emit(true);

    // Check if input is required
    if(this.required) {
      if(this.postalCodeValidator.errors?.['required']) this.openSnackBar("Le champ 'CP' est obligaoire")
      if(this.postalCodeValidator.errors?.['minlength']) this.openSnackBar("Le CP doit être suppérieur à 4 caractères")
    }
    
    // Check pattern
    if(this.postalCodeValidator.errors?.['pattern']) this.openSnackBar("Format invalide (uniquement nombres)")

    // Send data to father 
    this.postalCodeEvent.emit(value);
  }

  // VILLAGE
  updateVillage(value: string) {
    //Tell father validity is ok
    this.villageValidityEvent.emit(true);

    // Check if input is required
    if(this.required) {
      if(this.villageValidator.errors?.['required']) this.openSnackBar("Le champ 'Village' est obligaoire")
      if(this.villageValidator.errors?.['minlength']) this.openSnackBar("Le village doit être suppérieur à 3 caractères")
    }
    
    // Check pattern
    if(this.villageValidator.errors?.['pattern']) this.openSnackBar("Format invalide (pas de symbole)")

    // Send data to father 
    this.villageEvent.emit(value);
  }

  // Open SnackBar
  openSnackBar(message: string) {
    // Tell father validity not ok
    this.streetValidityEvent.emit(false);
    this.homeNumberValidityEvent.emit(false);
    this.postalCodeValidityEvent.emit(false);
    this.villageValidityEvent.emit(false);

    // Show snackbar
    this._snackBar.open(message, 'Fermer', {
      duration: 3000
    });
  }

}
