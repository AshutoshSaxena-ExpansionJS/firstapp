import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  standalone: false,
  
  templateUrl: './dynamic-list.component.html',
  styleUrl: './dynamic-list.component.css'
})
export class DynamicListComponent {
  items: string[] = ['angular', 'typescript', 'component', 'directive', 'pipe'];
}
