import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  characters: Character[] = [
    { name: 'Krilin', power: 100 },
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 7500 },
  ];
}
