import { Component, OnInit } from '@angular/core';
import { of, fromEvent } from 'rxjs';
import { filter, take, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filtering-operators',
  standalone: false,
  template: `
    <h2>Filtering Operators</h2>
    <p>Check the console for output.</p>
  `
})
export class FilteringOperatorsComponent implements OnInit {
  ngOnInit() {
    this.exampleFilter();
    this.exampleTake();
    this.exampleDebounceTime();
  }

  exampleFilter() {
    of(1, 2, 3, 4, 5).pipe(
      filter(x => x % 2 === 0)
    ).subscribe(value => console.log('filter:', value));
  }

  exampleTake() {
    of(1, 2, 3, 4, 5).pipe(
      take(3)
    ).subscribe(value => console.log('take:', value));
  }

  exampleDebounceTime() {
    fromEvent(document, 'click').pipe(
      debounceTime(1000)
    ).subscribe(() => console.log('debounceTime: Clicked!'));
  }
}
