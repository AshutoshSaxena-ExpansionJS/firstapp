import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown> {
  constructor(private snackBar: MatSnackBar) {}

  canActivate(): Observable<boolean> | boolean {
    return this.showConfirmationSnackbar('Are you logged in?');
  }

  canActivateChild(): Observable<boolean> | boolean {
    return this.canActivate();
  }

  canDeactivate(): Observable<boolean> | boolean {
    return this.showConfirmationSnackbar('Do you want to leave this page?');
  }

  private showConfirmationSnackbar(message: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const snackBarRef = this.snackBar.open(message, 'Confirm', {
        duration: 3000,
      });

      const actionSubscription = snackBarRef.onAction().subscribe(() => {
        observer.next(true);
        observer.complete();
      });

      const dismissSubscription = snackBarRef.afterDismissed().subscribe(() => {
        observer.next(false);
        observer.complete();
      });

      return () => {
        actionSubscription.unsubscribe();
        dismissSubscription.unsubscribe();
      };
    }).pipe(
      switchMap(result => of(result)) 
    );
  }
}
