import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static passwordStrength(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    if (!value.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/)) {
      return { passwordStrength: true };
    }
    return null;
  }
}