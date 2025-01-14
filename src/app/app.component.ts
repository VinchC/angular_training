import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.models';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  monster1!: Monster;
  count = 0;
  monster2!: Monster;

  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Pik';
    this.monster1.hp = 48;
    this.monster1.figureCaption = 'N° 002 Monster';
    this.monster1.attackName = 'Whatever';
    this.monster1.attackStrength = 80;
    this.monster1.attackDescription =
      "This is a WAYYYY too long description and I don't know what to add - is it long enough ?";

    this.monster2 = new Monster();
    this.monster2.name = 'Pik';
    this.monster2.hp = 84;
    this.monster2.figureCaption = 'N° 002 Monster';
    this.monster2.attackName = 'Geo Impact';
    this.monster2.attackStrength = 60;
    this.monster2.attackDescription =
      "This is a long description and I don't know what to add - is it long enough ?";
  }
}
