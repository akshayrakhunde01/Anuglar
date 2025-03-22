import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
name:string="Databinding One";
rollNo:number=90;
isIndian:boolean =true;
admissionDate:Date= new Date()
inputType:string='checkbox';
courseName:string='computer science';
stateName:string =""

constructor(){}
showAlert(message:string){
  console.log(this.stateName)
  alert(`essage function is triggered: ${message}`)
}
}
