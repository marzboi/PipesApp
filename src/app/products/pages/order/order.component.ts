import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUppperCase: boolean = false;
  public orderBy?: keyof Hero;

  toggleUpperCase(): void {
    this.isUppperCase = !this.isUppperCase;
  }

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },

    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'green lantern',
      canFly: true,
      color: Color.green,
    },
  ];

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }
}
