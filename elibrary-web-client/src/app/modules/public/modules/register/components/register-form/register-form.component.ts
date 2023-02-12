import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

interface RegisterForm {
    name: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
}

export interface RegisterFormValue {
    name: string;
    email?: string;
    password?: string;
}

@UntilDestroy()
@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

    @Output() formValueEvent = new EventEmitter<RegisterFormValue>();

    form!: FormGroup<RegisterForm>;

    constructor() {}

    ngOnInit(): void {
        this.form = new FormGroup({
            'name': new FormControl('', [Validators.required]),
            'email': new FormControl('', [Validators.required]),
            'password': new FormControl('', [Validators.required])
        });

        this.form.valueChanges
        .pipe(untilDestroyed(this))
        .subscribe(formValue => this.formValueEvent.emit({
            name: formValue.name as string,
            email: formValue.email as string,
            password: formValue.password as string
        }));
    }
}
