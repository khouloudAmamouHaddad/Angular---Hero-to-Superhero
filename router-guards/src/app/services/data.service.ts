import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData() {
    return of('SubscribeChannel').pipe(delay(100));
  }
}
