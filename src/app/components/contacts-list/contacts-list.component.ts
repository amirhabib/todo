import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})

export class ContactsListComponent implements OnInit {

  @Input() contacts;

  constructor() { }

  ngOnInit() {
  }


  doSomething( contactId ) {

    let index = this.contacts.findIndex( contact => contact.id === contactId)

    this.contacts[index].name = 'Clicked'
  }

}
