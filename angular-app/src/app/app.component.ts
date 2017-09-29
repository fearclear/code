import { Component } from '@angular/core';
import {Hero} from './hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app';
  msg = 'hello world';
  arr:object[] = [{a: 'mike'}]
  items: object[] = [
    {
      name: 'Mike',
      age: 18,
    }
  ]
  heros: object[] = [
    {
      a: new Hero('mike', 1, 'male')
    }
  ]
  constructor(){
    
  }
}
