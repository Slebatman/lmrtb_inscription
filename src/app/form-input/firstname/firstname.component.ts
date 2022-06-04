import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-firstname',
  templateUrl: './firstname.component.html',
  styleUrls: ['./firstname.component.css']
})
export class FirstnameComponent implements OnInit {

  // Input & Output data
  @Input() firstname : string = '';
  @Input() required : boolean = false;
  
  @Output() firstnameEvent = new EventEmitter<string>();
  @Output() validityEvent = new EventEmitter<boolean>();

  // Constructor
  constructor(private _snackBar: MatSnackBar) { }

  // Validator
  firstnameValidator!: FormControl;

  ngOnInit(): void {
    // Init validator FormControl
    this.firstnameValidator = new FormControl(this.firstname, [
      Validators.pattern('^[ A-Za-z\é\è\ê\-]+$')
    ])  

    // Add validators only if input is required
    if(this.required) {
      this.firstnameValidator.addValidators(Validators.required)
      this.firstnameValidator.addValidators(Validators.minLength(3))
    }
  }

  // Send data to father
  updateFirstName(value: string) {
    //Tell father validity is ok
    this.validityEvent.emit(true);

    // Check if input is required
    if(this.required) {
      if(this.firstnameValidator.errors?.['required']) this.openSnackBar("Le champ 'Prénom' est obligaoire")
      if(this.firstnameValidator.errors?.['minlength']) this.openSnackBar("Le prénom doit être suppérieur à 3 caractères")
    }
    
    // Check pattern
    if(this.firstnameValidator.errors?.['pattern']) this.openSnackBar("Format invalide (pas de symbole)")

    // Send data to father  
    this.firstnameEvent.emit(value);
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
