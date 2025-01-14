import { Component, OnInit } from '@angular/core';
import { of, combineLatest, merge, forkJoin } from 'rxjs';

@Component({
  selector: 'app-combination-operators',
  standalone: false,
  template: `
    <h2>Combination Operators</h2>
    <p>Check the console for output.</p>
  `
})
export class CombinationOperatorsComponent implements OnInit {
  ngOnInit() {
    this.exampleCombineLatest();
    this.exampleMerge();
    this.exampleForkJoin();
  }

  exampleCombineLatest() {
    const obs1 = of('A', 'B', 'C');
    const obs2 = of(1, 2, 3);
    combineLatest([obs1, obs2]).subscribe(value => console.log('combineLatest:', value));
  }

  exampleMerge() {
    const obs1 = of('X', 'Y', 'Z');
    const obs2 = of(4, 5, 6);
    merge(obs1, obs2).subscribe(value => console.log('merge:', value));
  }

  exampleForkJoin() {
    const obs1 = of('P', 'Q', 'R');
    const obs2 = of(7, 8, 9);
    forkJoin([obs1, obs2]).subscribe(value => console.log('forkJoin:', value));
  }
}
