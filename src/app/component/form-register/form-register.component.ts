import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit{

  public formRecord: FormGroup;

  constructor(private formBuilder: FormBuilder) {
     this.buildForm()
  }

  public register(){
    const user = this.formRecord.value;
    console.log(user);
    
  }
  private buildForm(){

    const minLength = 8;

    this.formRecord = this.formBuilder.group({
       nombre: [, Validators.required],
       apellido: [, Validators.required],
       email: [, [Validators.required, Validators.email]],
       password: [, [Validators.required, Validators.minLength(minLength)]],

    });
  }
  ngOnInit():void{}

}
