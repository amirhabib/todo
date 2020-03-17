import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Output() newContactEvent:EventEmitter<any>= new EventEmitter<any>();
  @Output() editContactEvent:EventEmitter<any> = new EventEmitter<any>();
  @Input() contact;

  constructor() { }

  ngOnInit() {
  }

  saveContact() {

    if( !this.contact.id ) {

      this.newContactEvent.emit( this.contact )

    } else {

      this.editContactEvent.emit( this.contact )
    }

  }
}
