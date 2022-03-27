import { FormControl, ValidationErrors } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

export class CustomValidator {

    static Required(c: FormControl, fieldName?: string): ValidationErrors | null {
        let Error: ValidationErrors = { "required": "Please  provide required values." }
        if (c.value == null || (c.value as string).trim().length <= 0) {
            return Error;
        }
        return null;
    }

    static Email(c: FormControl): ValidationErrors | null {
        let EMAIL_REGEXP: RegExp = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
        let Error: ValidationErrors = { "email": "Please provide valid email." }
        return EMAIL_REGEXP.test(c.value) ? null : Error;
    }

    static Password(c: FormControl): ValidationErrors | null {
        var passwordRegex: string = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})';
        var regex: RegExp = new RegExp(passwordRegex);
        let error: ValidationErrors = { "password": "Please provide a stong password" }
        return regex.test(c.value) ? null : error;
    }

    static PasswordMatch(formGroup: FormGroup): ValidationErrors | null {
        var error: ValidationErrors = { "passwordMatch": `password does not match` }
        const password = formGroup.get('password')?.value;
        const confirmPassword = formGroup.get('confirmPassword')?.value;
        if (password == confirmPassword) {
            return null;
        }
        return error;
    }

}