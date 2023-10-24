import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';


  constructor(private authService: AuthService) {}

  get isLogged() {
    return this.authService.getIsLogged();
  }




}
