import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    //  Primitive data
    msg = 'Hello App Component'

    contacts = [];

    data = null;

    constructor(private contactsService:ContactsService) {

    console.log('App Component constructor');

    this.msg = contactsService.msg

    this.contacts = contactsService.contacts;

    this.data = contactsService.data;


    //  Listen to msg changes

    //  without value
    // contactsService.OnMessageChanged.subscribe( () => {
    //   this.msg = contactsService.msg
    // })

    //  with value
    contactsService.OnMessageChanged.subscribe( newMessage => {
      this.msg = newMessage;
    })

  }

  ngOnInit() {
    console.log('App Component ngOnInit')
  }


  changeMessage() {
    this.contactsService.changeMessage()
  }

  addFredi() {
    this.contactsService.addFredi()
  }

  addPink() {
    this.contactsService.addPink()
  }

  incCounter() {
    this.contactsService.incCounter()
  }

}
