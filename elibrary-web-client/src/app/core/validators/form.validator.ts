import { AbstractControl, ValidatorFn } from "@angular/forms";
import isEmail from 'validator/es/lib/isEmail';

export function emailValidator(): ValidatorFn {
    return (control: AbstractControl) => {
        const validEmail = isEmail(control.value)
        return !validEmail ? {isEmail: false} : null;
    }
}
