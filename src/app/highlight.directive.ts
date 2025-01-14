import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('click') onMouseClick() {
    this.highlight(this.highlightColor);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
