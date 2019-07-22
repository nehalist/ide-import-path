import {Injectable} from '@angular/core';
// import {BarService} from './bar.service'; // triggers "Import can be shortened"
import {BarService} from 'custom-lib'; // causes circular dependency

@Injectable()
export class FooService {
  constructor(barService: BarService) {}

  foo() {
    console.log('foo');
  }
}
