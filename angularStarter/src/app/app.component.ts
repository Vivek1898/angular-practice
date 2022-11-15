import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularStarter';
  firstName = 'John';
  lastName = 'Doe';
  age = 30;
  address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  };
  email = "abc@gmail.com";
}
