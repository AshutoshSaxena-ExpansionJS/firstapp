import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';
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
  `],
  providers: [ReversePipe]
})
export class ItemDisplayComponent implements OnInit, OnChanges {
  private _item: string = ''; 
  reversedItem: string = ''; 
  bgColor: string = 'white'

  constructor(private reversePipe: ReversePipe) {}
  
  @Input()
  set item(value: string) { 
    this._item = value; 
    this.reversedItem = this.reversePipe.transform(value);
  }
  get item(): string { 
    return this._item; 
  }

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
