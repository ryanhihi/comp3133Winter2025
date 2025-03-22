import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputFormatDirective } from './input-format.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, InputFormatDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ex-3';
}
