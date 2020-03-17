import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Input() contacts;

  constructor() { }

  ngOnInit() {
  }

  addContact(name, phone) {
    let newContact = {
      name: name,
      phone: phone
    }

    console.log('Adding ' + newContact.name + ' ... ');
    this.contacts.push( newContact )
    console.log('Done!');
  }
}
