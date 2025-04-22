import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  // imports: [ReactiveFormsModule],
  imports: [],
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
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email:new FormControl(null),
      username:new FormControl(''),
      DateOfBirth:new FormControl(''),
      gender: new FormControl(''),
      streetAddress:new FormControl(''),
      country:new  FormControl(''),
      city:new FormControl(''),
      region:new FormControl(''),
      postalCode:new FormControl(''),
      createAuserName:new FormControl(''),
      submit:new FormControl('')
    });
  }
}
