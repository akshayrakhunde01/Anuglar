import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angukarP1';
}
