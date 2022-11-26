import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { Observable, exhaustMap, tap } from 'rxjs';
import { LoginRestService } from 'src/app/core/rest/login/login-rest.service';
import { LoginRequest } from 'src/app/core/rest/login/model/login-request.model';
import { LoginResponse } from 'src/app/core/rest/login/model/login-response.model';
import { SECURED__DASHBOARD } from 'src/app/core/utils/route-service';
import { loginSuccess } from 'src/app/reducers/app.actions';

interface State {
    loading: boolean;
    credentials: LoginResponse | null;
}

const INITIAL_STATE: State = {
    loading: false,
    credentials: null
};

@Injectable()
export class LoginStore extends ComponentStore<State> {
    credentials$: Observable<LoginResponse | null> = this.select(
        (state) => state.credentials
    );

    constructor(
        private loginRestService: LoginRestService,
        private router: Router,
        private store: Store<State>
    ) {
        super(INITIAL_STATE);
    }

    setCredentials = this.updater(
        (state: State, credentials: LoginResponse) => ({
            ...state,
            credentials
        })
    );

    userLogin = this.effect((credentials$: Observable<LoginRequest>) =>
        credentials$.pipe(
            exhaustMap((credentials) => {
                return this.loginRestService.login(credentials).pipe(
                    tap((response) => {
                        this.setCredentials(response);
                        this.setUserInfoAndRedirect(response);
                    })
                );
            })
        )
    );

    private setUserInfoAndRedirect(userInfo: LoginResponse): void {
        this.store.dispatch(loginSuccess({userInfo: userInfo}));
        this.router.navigate([SECURED__DASHBOARD]);
    }
}
