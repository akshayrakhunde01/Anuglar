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
  stateNames:string[]=['maharashtra','karnataka','tamilnadu','kerala','andhra pradesh','telangana','madhya pradesh','gujarat','rajasthan','uttar pradesh','bihar','jharkhand','west bengal','odisha','assam','arunachal pradesh','nagaland','manipur','mizoram','tripura','meghalaya','sikkim','goa','haryana','punjab','jammu and kashmir','uttarakhand','himachal pradesh','chhattisgarh','jharkhand','telangana','andaman and nicobar islands','chandigarh','dadra and nagar haveli','daman and diu','lakshadweep','delhi','puducherry']
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
