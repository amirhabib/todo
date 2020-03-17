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

    editedContact = {
      id: '',
      name: '',
      phone: ''
    }

    OnNewContact( contact ) {

      if(this.contacts.length > 9) {
        console.error('Cannot add more than 10')
      } else {

        contact.id = '' + this.contacts.length + 1
        this.contacts.push( contact )
        this.resetEditedContact()
      }
    }

    OnEditContact( editedContact ) {

      let index = this.contacts.findIndex( contact => contact.id === editedContact.id)
      this.contacts[index] = editedContact
      this.resetEditedContact()
    }

    resetEditedContact() {
      this.editedContact = {
        id: '',
        name: '',
        phone: ''
      }
    }

    editContact( contact ) {

      this.editedContact = {...contact}
      // this.editedContact = {
      //   id: contact.id,
      //   name: contact.name,
      //   phone: contact.phone
      // }
    }
}
