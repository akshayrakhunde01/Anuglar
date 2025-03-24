import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  isWatching:boolean=true;
  isToggle:boolean=true;
  constructor() { 
   
  }
   hideWatching(){
      this.isWatching=false
  }
  showWatching(){
    this.isWatching=true
  };

  toggle(){
    this.isToggle=!this.isToggle
  }
}
