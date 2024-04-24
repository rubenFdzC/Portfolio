import { Component, Input } from '@angular/core';
import { ICOntacto } from '../../interfaces/contact.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.scss'
})
export class ContactosComponent {
@Input() listado!: ICOntacto[];
}
