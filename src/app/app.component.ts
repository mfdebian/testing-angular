import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Testing App';
  message = "";

  onClick() {
    this.message = "Click";
    return this.message;
  }

}
