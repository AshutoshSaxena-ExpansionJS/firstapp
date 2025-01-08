import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-item-display',
  standalone: false,
  template: `<div [style.background-color]="bgColor" class="item">{{ item }}</div>`,
  styles: [`
    .item {
      padding: 10px;
      margin: 5px;
      border-radius: 5px;
    }
  `]
})
export class ItemDisplayComponent implements OnInit, OnChanges {
  @Input() item: string='';
  bgColor: string = 'white';

  ngOnInit() {
    console.log('ngOnInit - ItemDisplayComponent initialized');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['item']) {
      this.changeBackgroundColor();
      console.log('ngOnChanges - New item received:', changes['item'].currentValue);
    }
  }

  changeBackgroundColor() {
    const colors = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9'];
    this.bgColor = colors[Math.floor(Math.random() * colors.length)];
  }
}
