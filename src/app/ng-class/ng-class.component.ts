import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  isRed: boolean = false;
  isBold: boolean = false;
  isCentered: boolean = false;
  classes: Record<string, boolean> = { };

  constructor() { }

  is(bool: boolean): string {
    return bool ? 'is' : 'is not';
  }

  toggleColor(): void {
    this.isRed = !this.isRed;
    this.classes["red-text"] = this.isRed;
  }

  toggleFont(): void {
    this.isBold = !this.isBold;
    this.classes["bold-font"] = this.isBold;
  }

  toggleAlignment(): void {
    this.isCentered = !this.isCentered;
    this.classes["centered-content"] = this.isCentered;
  }
}
