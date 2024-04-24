import { Component, OnInit } from '@angular/core';
import { ICOntacto } from '../../interfaces/contact.interface';
import { ContactosComponent } from "../contactos/contactos.component";

@Component({
    selector: 'app-agenda',
    standalone: true,
    templateUrl: './agenda.component.html',
    styleUrl: './agenda.component.scss',
    imports: [ ContactosComponent]
})
export class AgendaComponent implements OnInit {
  listado: ICOntacto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listado = [
      {
        name: "Rubén Fernández Alonso de Linaje",
        email: "rubenfdz1998@gmail.com",
        telefono: "646945270",
        comentarios: " "
      }
    ]
  }
  addContact(contact: ICOntacto){
    this.listado.push(contact)
  }
}
