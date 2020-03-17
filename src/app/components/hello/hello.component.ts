import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  msg = 'Hello from Hello Component';
  data = null;

  constructor(contactsService:ContactsService) {

    console.log('Hello Component constructor')

    this.msg = contactsService.msg;
    this.data = contactsService.data;

  }

  ngOnInit() {

    console.log('Hello Component ngOnInit')

  }

}
