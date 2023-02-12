import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PUBLIC } from 'src/app/core/utils/route-service';
import {
    ELIBRARY_LOGO,
    REGISTER_COVER
} from 'src/app/shared/utils/image-routes.util';
import { RegisterFormValue } from '../components/register-form/register-form.component';
import { RegisterStore } from '../store/register.store';

@Component({
    selector: 'app-register-container',
    templateUrl: './register-container.component.html',
    styleUrls: ['./register-container.component.scss'],
    providers: [RegisterStore]
})
export class RegisterContainerComponent {
    readonly ELIBRARY_LOGO = ELIBRARY_LOGO;
    readonly REGISTER_COVER = REGISTER_COVER;
    readonly PUBLIC = PUBLIC;

    constructor(private store: RegisterStore, private router: Router) {}

    onFormValueChange(formValue: RegisterFormValue): void {
        this.store.setFormValue(formValue);
    }

    onRegister(): void {
        this.store.register();
    }

    onBack(): void {
        this.router.navigate([PUBLIC])
    }
}
