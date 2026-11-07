import { Component , ViewEncapsulation} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-greeting',
  styleUrl: './greeting.css',
  templateUrl: './greeting.html',
  encapsulation: ViewEncapsulation.None
})
export class Greeting {
  interpolatedGreeting = 'Hello, Gunda!';
}
