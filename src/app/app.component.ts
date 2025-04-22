import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // DatabindingComponent,StructuralDirectiveComponent,AttributeDirectiveComponent
})
export class AppComponent {
  title = 'angukarP1';
}
