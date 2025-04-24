import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,CommonModule,],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {
  // registrationForm=new FormGroup({
  //   firstName:new FormControl(''),
  //   lastName:new FormControl('')
  // })

  registrationForm!: FormGroup;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      username: new FormControl(''),
      dateOfBirth: new FormControl(''),
      gender: new FormControl('male'),
      streetAddress: new FormControl(''),
      country: new FormControl('India'),
      city: new FormControl(''),
      region: new FormControl(''),
      postalCode: new FormControl('')
    });
  }
  onSubmitForm(){
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
    } else {
      this.registrationForm.markAllAsTouched(); // show errors
    }
  }

  get f() {
    return this.registrationForm.controls;
  }
}
