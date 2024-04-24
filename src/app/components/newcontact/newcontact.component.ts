import { Component, EventEmitter, Output } from '@angular/core';
import { ICOntacto } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-newcontact',
  standalone: true,
  imports: [],
  templateUrl: './newcontact.component.html',
  styleUrl: './newcontact.component.scss'
})
export class NewcontactComponent {
@Output() newContact = new EventEmitter();


sendNewContact(contacto : ICOntacto){
  this.newContact.emit(contacto);
}
}
