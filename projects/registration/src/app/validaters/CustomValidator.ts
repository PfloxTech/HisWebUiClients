import { FormControl, ValidationErrors } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export class CustomValidator {

    static Required(ctrl: FormControl): ValidationErrors | null {
        let Error: ValidationErrors = { "required": "Please  provide required values." }
        if (ctrl.value == null || (ctrl.value as string).trim().length <= 0) {
            return Error;
        }
        return null;
    }

    static Email(ctrl: FormControl): ValidationErrors | null {
        let EMAIL_REGEXP: RegExp = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
        let Error: ValidationErrors = { "email": "Please provide valid email." }
        return EMAIL_REGEXP.test(ctrl.value) ? null : Error;
    }

    static Password(ctrl: FormControl): ValidationErrors | null {
        var passwordRegex: string = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})';
        var regex: RegExp = new RegExp(passwordRegex);
        let error: ValidationErrors = { "password": "Password must contain a capital letter, number, special symbol and length must be atleast 8." }
        return regex.test(ctrl.value) ? null : error;
    }

    static PasswordMatch(ctrl: AbstractControl): ValidationErrors | null {
        var error: ValidationErrors = { "passwordMatch": `password does not match` }
        const password = ctrl.get('password')?.value;
        const confirmPassword = ctrl.get('confirmPassword')?.value;
        if (password == confirmPassword) {
            return null;
        }
        return error;
    }

}