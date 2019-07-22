import { Component } from '@angular/core';
import {FooService} from 'custom-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consumer';

  constructor(foo: FooService) {}
}
