import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  styles: Record<string, string> = { };
  toggle: boolean = false;

  constructor() { }

  toggleStyles(): void {
    this.toggle = !this.toggle
    this.styles = {
      'font-style':  this.toggle ? 'italic' : 'normal',
      'font-weight': this.toggle ? 'bold'   : 'normal',
      'font-size':   this.toggle ? '24px'   : '12px'
    };
  }
}
