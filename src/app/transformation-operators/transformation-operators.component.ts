import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, switchMap, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-transformation-operators',
  standalone: false,
  template: `
    <h2>Transformation Operators</h2>
    <p>Check the console for output.</p>
  `
})
export class TransformationOperatorsComponent implements OnInit {
  ngOnInit() {
    this.exampleMap();
    this.exampleMergeMap();
    this.exampleSwitchMap();
    this.exampleConcatMap();
  }

  exampleMap() {
    of(1, 2, 3).pipe(
      map(x => x * 2)
    ).subscribe(value => console.log('map:', value));
  }

  exampleMergeMap() {
    of('A', 'B', 'C').pipe(
      mergeMap(letter => of(`${letter}1`, `${letter}2`))
    ).subscribe(value => console.log('mergeMap:', value));
  }

  exampleSwitchMap() {
    of('X', 'Y', 'Z').pipe(
      switchMap(letter => of(`${letter}1`, `${letter}2`))
    ).subscribe(value => console.log('switchMap:', value));
  }

  exampleConcatMap() {
    of('M', 'N', 'O').pipe(
      concatMap(letter => of(`${letter}1`, `${letter}2`))
    ).subscribe(value => console.log('concatMap:', value));
  }
}
