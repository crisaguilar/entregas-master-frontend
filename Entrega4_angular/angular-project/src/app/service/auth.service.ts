import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { Router } from '@angular/router';

interface User {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged: boolean = false;
  user: User = {
    userName: '',
    password: '', 
  };

  constructor(private router: Router) {}

  getIsLogged() {
    return this.isLogged;
  }
    
  login({ userName, password }: User): Observable<boolean> {
    if (userName === 'master@lemoncode.net' && password === '12345678') {
      return of(true).pipe(
        delay(1000),
        tap(() => {
          this.isLogged = true;
          this.user.userName = userName;
          localStorage.setItem('isLogged', this.isLogged ? 'true' : 'false');
          this.router.navigate(['/']);
        })
      );
    } else {
      return of(false).pipe(
        delay(1000),
        tap(() => alert('Loggin fale'))
      );
    }
  }

  logout(): void {
    this.isLogged = false;
    this.user.userName = '';
    localStorage.removeItem('isLogged');
  }

  getUserName(): string {
    return this.user.userName;
  }
}

