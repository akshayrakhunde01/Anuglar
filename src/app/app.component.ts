import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // DatabindingComponent,StructuralDirectiveComponent,AttributeDirectiveComponent
})
export class AppComponent {
  title = 'angukarP1';
}
