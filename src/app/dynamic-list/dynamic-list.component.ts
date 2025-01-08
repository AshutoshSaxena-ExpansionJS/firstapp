import { Component, OnInit } from '@angular/core';
import { CapitalizeFirstLastPipe } from '../capitalize-first-last.pipe';

@Component({
  selector: 'app-dynamic-list',
  standalone: false,
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css'],
  providers: [CapitalizeFirstLastPipe]
})
export class DynamicListComponent implements OnInit {
  items: string[] = ['angular', 'typescript', 'component', 'directive', 'pipe'];
  displayedItems: string[] = [];

  constructor(private capitalizeFirstLastPipe: CapitalizeFirstLastPipe) {}

  ngOnInit() {
    console.log('ngOnInit - Component initialized');
    this.displayItemsWithDelay();
  }

  displayItemsWithDelay() {
    this.items.forEach((item, index) => {
      setTimeout(() => {
        const transformedItem = this.capitalizeFirstLastPipe.transform(item);
        this.displayedItems.push(transformedItem);
        console.log('New item displayed:', transformedItem);
      }, 1000 * index);
    });
  }
}
