import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    contacts = [
      {
        id: '1',
        name: 'Alexander',
        phone: '050'
      },
      {
        id: '2',
        name: 'Dana',
        phone: '051'
      }
    ]

}
