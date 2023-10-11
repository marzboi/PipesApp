import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUppperCase: boolean = false;

  toggleUpperCase(): void {
    this.isUppperCase = !this.isUppperCase;
  }
}
