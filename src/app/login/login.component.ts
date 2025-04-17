import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  template: `
     <form [formGroup]="myForm">
      <input formControlName="firstName" type="text" />
      <input formControlName="lastName" type="text" />
    </form>
  `,
  styles: `
  input {
          border: 1px solid;
          margin:3px
        }`
})
export class LoginComponent {
  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
}
