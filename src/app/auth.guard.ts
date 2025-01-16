import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown> {
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Are you logged in?');
  }

  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate();
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Do you want to leave this page?');
  }
}