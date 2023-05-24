import { Component } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public formulario: FormGroup

  ngOnInit(){
    this.formulario = new FormGroup({
     'email': new FormControl (null, Validators.required),
     'password': new FormControl (null, [Validators.required, Validators.minLength(6), this.passwordValidator]),
    }); 

  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {

   const password = control.value;
   const valid = /\d/.test(password) && /[A-Z]/.test(password) && /[a-z]/.test(password);
   return valid ? null : { invalidPassword: true };
  }

  onSubmit(){

    console.log('email:', this.formulario.get('email').value);
    console.log('password:', this.formulario.get('password').value);
   
  }
}
