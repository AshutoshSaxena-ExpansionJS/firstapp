import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoneless-example',
  standalone: false,
  templateUrl: './zoneless-example.component.html',
  styleUrls: ['./zoneless-example.component.css']
})
export class ZonelessExampleComponent implements OnInit {
  counter: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.runOutsideAngular();
  }

  runOutsideAngular(): void {
      setInterval(() => {
        this.counter++;
        console.log('Counter: ', this.counter);
        //this.cdr.detectChanges(); 
      }, 1000);
    };
}