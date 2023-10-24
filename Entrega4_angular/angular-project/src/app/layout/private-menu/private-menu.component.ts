import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss']
})
export class PrivateMenuComponent {
  constructor(private authService: AuthService) {}
  user: string = this.authService.getUserName();

}
