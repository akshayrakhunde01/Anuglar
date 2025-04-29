import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.css'
})
export class ReactiveFormValidationComponent {
  userForm:FormGroup

  constructor(){
    this.userForm=new FormGroup({
      firstName:new FormControl("",[Validators.required,Validators.minLength(3)]),
      lastName:new FormControl("",[Validators.required,Validators.minLength(3)]),
      userName: new FormControl(""),
      city:new FormControl(""),
      state:new FormControl("Maharashtra"),
      zip:new FormControl(""),
      agreement:new FormControl(false)
    })
  }

  onSubmit(){
  //  alert('form submit event triggerd')
  }
}
