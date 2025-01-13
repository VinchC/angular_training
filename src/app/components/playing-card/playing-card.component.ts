import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css',
})
export class PlayingCardComponent {
  @Input() name: string | undefined;
  @Input() hp: number | undefined;
  @Input() picture: string | undefined;
  @Input() figureCaption: string | undefined;
  @Input() attackName: string | undefined;
  @Input() attackStrength: number | undefined;
  @Input() attackDescription: string | undefined;
}
