import { Component } from '@angular/core';
import { AgendaComponent } from "../../components/agenda/agenda.component";
import { NewcontactComponent } from "../../components/newcontact/newcontact.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [AgendaComponent, NewcontactComponent]
})
export class ContactComponent {

}
