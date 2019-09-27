import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title = 'Angular Pagination Tutorial';
  // Some array of things.
  public employeedata = [];
  // Pagination parameters.
  p: Number = 1;
  count: Number = 1;
 
  constructor() {
    console.log('Application loaded. Initializing data.');
 
    this.employeedata = [
     {"imageUrl":"assets/c1.jpeg"},
     {"imageUrl":"assets/c2.jpg"},
     {"imageUrl":"assets/c3.jpg"},
    
    ];
  }
}
