import {  ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

  export const passwordVerificationValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password');
    const verifyPassword = control.get('verifyPassword');
  
    return !(password && verifyPassword && password.value === verifyPassword.value) ? { noMatch: true } : null;
  };