import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  now: number;

  constructor() {
    this.now = 1;
  }

  ngOnInit() {
  }
}
