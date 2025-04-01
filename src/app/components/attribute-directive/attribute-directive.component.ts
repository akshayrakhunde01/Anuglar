import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
 constructor(){}

 chanageColor:string=''
 
 changeColorDiv1TOGreen(){
  this.chanageColor='green'
 }

 changeColorDiv1TOYellow(){
  this.chanageColor='yellow'
 }
}
