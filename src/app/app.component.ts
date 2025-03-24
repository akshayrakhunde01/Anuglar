import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent,StructuralDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angukarP1';
}
