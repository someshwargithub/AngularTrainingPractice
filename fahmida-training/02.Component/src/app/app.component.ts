import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { PersonComponent } from './person/person.component';
import { HeaderComponent } from './header/header.component';
import { BindingTestComponent } from './binding-test/binding-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, PersonComponent, HeaderComponent, BindingTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDemo';
}
