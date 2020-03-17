import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  msg:string = 'Hello from Contacts Services'
  OnMessageChanged = new EventEmitter<string>();

  data = {
    colors: ['red','green','blue'],
    counter: 100
  }

  contacts = [
    {
      id: '1',
      name: 'Alex',
      phone: '050'
    },
    {
      id: '2',
      name: 'Dana',
      phone: '051'
    }
  ]

  constructor() { }

  getMessage() {
    return this.msg;
  }

  changeMessage() {

    this.msg = 'This is a new message from service'

    //  Produce an "event"
    //  this.OnMessageChanged.emit() without data

    //  with value
    this.OnMessageChanged.emit(
      this.msg
    )

    console.log('message changed')
  }

  addFredi() {
    this.contacts.push({
      id:'3',
      name:'Fredi',
      phone: '055'
    })
  }

  addPink() {
    this.data.colors.push('pink');
  }

  incCounter() {
    this.data.counter++;
  }

}
