import { Component } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent {
  name: string = 'My Monster';
  hp: number = 40;
  figureCaption: string = 'N° 001 Monster';
  attackName: string = 'Geo Impact';
  attackStrength: number = 60;
  attackDescription: string =
    "This is a long description and I don't know what to add - is it long enough ?";
}
