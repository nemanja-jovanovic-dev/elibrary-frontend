import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface RegisterForm {
    name: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
}

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

    form!: FormGroup<RegisterForm>;

    constructor() {}

    ngOnInit(): void {
        this.form = new FormGroup({
            'name': new FormControl('', Validators.required),
            'email': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        })
    }
}
