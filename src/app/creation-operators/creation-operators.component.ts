import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, from, interval, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-creation-operators',
  standalone: false,
  template: `
    <h2>Creation Operators</h2>
    <p>Check the console for output.</p>
  `
})
export class CreationOperatorsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.exampleOf();
    this.exampleFrom();
    this.exampleInterval();
    this.exampleTimer();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  exampleOf() {
    const sub = of(1, 2, 3).subscribe(value => console.log('of:', value));
    this.subscriptions.push(sub);
  }

  exampleFrom() {
    const sub = from([10, 20, 30]).subscribe(value => console.log('from:', value));
    this.subscriptions.push(sub);
  }

  exampleInterval() {
    const sub = interval(1000).subscribe(value => console.log('interval:', value));
    this.subscriptions.push(sub);
  }

  exampleTimer() {
    const sub = timer(2000).subscribe(value => console.log('timer:', value));
    this.subscriptions.push(sub);
  }
}
