import { Component } from '@angular/core';
import { UserTableComponent } from './user-table/user-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, Health Tracker Challenge';
}
