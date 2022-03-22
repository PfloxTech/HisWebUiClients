import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {

    static Required(c: FormControl): ValidationErrors | null {
        let Error: ValidationErrors = { "required": "Please provide required values." }
        debugger;
        var crlValue: string = c.value;
        if (crlValue.trim().length <= 0) {
            return Error;
        }
        return null;
    }

    static Email(c: FormControl): ValidationErrors | null {
        let EMAIL_REGEXP: RegExp = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
        let Error: ValidationErrors = { "email": "Please provide valid email." }
        return EMAIL_REGEXP.test(c.value) ? null : Error;
    }
}