import { Component } from '@angular/core';
import { AgendaComponent } from '../agenda/agenda.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AgendaComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
 tuNombre: string = 'Rubén Fernández Alonso de Linaje';
}
