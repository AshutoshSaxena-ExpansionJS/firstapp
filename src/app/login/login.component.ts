import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private snackBar: MatSnackBar) {}
  login(): void {
    //alert('Logged in!');
    this.snackBar.open('Logged in!', 'Close', {
      duration: 2000,
    });
  }
}