import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'marco';
  public nameUpper: string = 'MARCO';
  public fullName: string = 'mArCo aNtOnIo';

  public customDate: Date = new Date();
}
