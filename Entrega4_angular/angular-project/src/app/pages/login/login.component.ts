import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription } from 'rxjs';



interface User {
  userName: string;
  password: string;
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginSubscription: Subscription | undefined;
  user: User = {
    userName: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  @Input() userInputPlaceholder = 'Username';
  @Input() passwordInputPlaceholder = 'Password';
  @Input() buttonName = 'Login';

  submitted = false;

  onSubmit() {
    this.loginSubscription = this.authService
      .login({
        userName: this.user.userName,
        password: this.user.password,
      })
      .subscribe({
        next: () => {
          console.log('success');
        },
      });
  }
  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}
