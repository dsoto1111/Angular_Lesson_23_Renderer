import { Component } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  person: Character = new Character('', 30, 'shaman');
  pname: string = '';

  changeName(event: Event) {
    this.pname = (<HTMLInputElement>event.target).value;
    this.person.name = (<HTMLInputElement>event.target).value;
    this.person = JSON.parse(JSON.stringify(this.person));
  }
}
