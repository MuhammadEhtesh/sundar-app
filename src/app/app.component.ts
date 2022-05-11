import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sundar-app';

  executeMe(event: any): void {
    console.log(event);
    console.log('Button Clicked');
  }
}
