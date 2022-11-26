import { Component, OnInit } from '@angular/core';
import { LoginRequest } from 'src/app/core/rest/login/model/login-request.model';
import { ELIBRARY_LOGO, HOMEPAGE_COVER } from 'src/app/shared/utils/image-routes.util';
import { LoginFormValue } from '../components/login-form/login-form.component';
import { LoginStore } from '../store/login.store';

@Component({
    selector: 'app-login-container',
    templateUrl: './login-container.component.html',
    styleUrls: ['./login-container.component.scss'],
    providers: [LoginStore]
})
export class LoginContainerComponent implements OnInit {

    HOMEPAGE_COVER = HOMEPAGE_COVER;
    ELIBRARY_LOGO = ELIBRARY_LOGO;

    constructor(private store: LoginStore) {}

    ngOnInit(): void {}

    onSignIn(loginFormValue: LoginFormValue): void {
        const credentials: LoginRequest = {
            email: loginFormValue.email as string,
            password: loginFormValue.password as string
        }

        this.store.userLogin(credentials);
    }
}
