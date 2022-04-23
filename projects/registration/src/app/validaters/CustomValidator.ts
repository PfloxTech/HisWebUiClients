import { FormControl, ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
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

    static DateLessThanToday(ctrl: FormControl): ValidationErrors | null {
        var error: ValidationErrors = { "dateLessThanToday": `Date should be small and eqaul to today date` }
        try {
            const dateInput = ctrl.value;
            if (dateInput != undefined || dateInput != null) {
                dateInput.setHours(0, 0, 0, 0);
                const todayDate = new Date().setHours(0, 0, 0, 0);
                if (dateInput <= todayDate) {
                    return null;
                }
                return error;
            }
        }
        catch (ex) {
            console.log(ex);
            return error;
        }
        return null;
    }

    public static IsMobileNumber(ctrl: FormControl): ValidationErrors | null {
        if (CustomValidator.CtrlHasValue(ctrl)) {
            var regex = new RegExp('[0-9]{10}');
            var match = regex.test(ctrl.value);
            if (!match) {
                var error: ValidationErrors = { "InvalidPhone": `Please provide valid mobile number ${ctrl.value} is invalid mobile number` };
                return error;
            }
        }
        return null;
    }

    private static IsNumber(number: any): boolean {
        if (number == undefined || number == null) {
            return false;
        }
        return isNaN(number);
    }

    private static CtrlHasValue(ctrl: FormControl): boolean {
        if (ctrl.value == undefined || ctrl.value == null) {
            return false;
        }

        if (ctrl.value.toString().trim().length > 0) {
            return true;
        }
        return false;
    }

}
