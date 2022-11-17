import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/core/validators/form.validator';

type Login = {
    email: FormControl<string | null>;
    password: FormControl<string | null>;
};

export type LoginFormValue = Partial<{
    email: string | null;
    password: string | null;
}>;

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    @Output() singnInEvent = new EventEmitter<LoginFormValue>();

    form!: FormGroup<Login>;

    constructor() {}

    ngOnInit(): void {
        this.form = new FormGroup<Login>({
            email: new FormControl<string>('', [Validators.required, emailValidator()]),
            password: new FormControl<string>('', [Validators.required, Validators.minLength(6)])
        });
    }

    onSignIn(): void {
        this.singnInEvent.emit(this.form.value);

        console.log('form: ', this.form);
    }
}
