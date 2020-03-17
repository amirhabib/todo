import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})

export class ContactsListComponent implements OnInit {

  @Input() contacts;
  @Output() OnEditContact:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }


  doSomething( contactId ) {

    let index = this.contacts.findIndex( contact => contact.id === contactId)

    this.contacts[index].name = 'Clicked'
  }

  editContact( contact ) {

    this.OnEditContact.emit( contact )
  }

}
