import {Injectable} from '@angular/core';

@Injectable()
export class BarService {
  bar() {
    console.log('bar');
  }
}