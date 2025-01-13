import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.models';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayingCardComponent],
})
export class AppComponent {
  monster1!: Monster;
  monster2!: Monster;

  constructor() {
    this.monster1 = new Monster();
    this.monster2 = new Monster();

    this.monster1.name = 'Bulb';
    this.monster1.hp = 94;
    this.monster1.figureCaption = 'N° 001 Monster';
    this.monster1.attackName = 'Geo Impact';
    this.monster1.attackStrength = 60;
    this.monster1.attackDescription =
      "This is a long description and I don't know what to add - is it long enough ?";

    this.monster2.name = 'Pik';
    this.monster2.hp = 49;
    this.monster2.figureCaption = 'N° 002 Monster';
    this.monster2.attackName = 'Whatever';
    this.monster2.attackStrength = 80;
    this.monster2.attackDescription =
      "This is a WAYYYY too long description and I don't know what to add - is it long enough ?";
  }
}
