import {Component} from '@angular/core';
import {Hero} from './hero';
@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  heros: { id: number; name: string; }[];
  goDetail: (item: any) => void;
  title = 'Tour of Heros';
  hero = 'Windstrom';
  msg = 'hello world';
  arr: object[] = [
    {
      a: 'mike'
    }
  ]
  items: object[]
  constructor() {
    this.heros = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    this.goDetail = function(item) {
      console.log(item.age || item.id);
    }
    this.items = [
      {
        name: 'Mike',
        age: 14,
      },
      {
        name: 'Lina',
        age: 17,
      }
    ]
  }
}
