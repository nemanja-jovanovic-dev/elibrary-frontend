import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { exhaustMap, Observable, tap } from 'rxjs';
import { LoginRequest } from 'src/app/core/rest/login/model/login-request.model';
import { UserRestService } from 'src/app/core/rest/login/user-rest.service';
import { SECURED__HOME } from 'src/app/core/utils/route-service';
import { loginSuccess } from 'src/app/reducers/app.actions';

interface State {
    loading: boolean;
    token: string | null;
}

const INITIAL_STATE: State = {
    loading: false,
    token: null
};

@Injectable()
export class LoginStore extends ComponentStore<State> {
    token$: Observable<string | null> = this.select(
        (state) => state.token
    );

    constructor(
        private loginRestService: UserRestService,
        private router: Router,
        private store: Store<State>
    ) {
        super(INITIAL_STATE);
    }

    setCredentials = this.updater(
        (state: State, token: string) => ({
            ...state,
            token
        })
    );

    userLogin = this.effect((credentials$: Observable<LoginRequest>) =>
        credentials$.pipe(
            exhaustMap((credentials) => {
                return this.loginRestService.login(credentials).pipe(
                    tap((response: {token: string}) => {
                        console.log(response);

                        this.setCredentials(response.token);
                        this.setUserInfoAndRedirect(response.token);
                    })
                );
            })
        )
    );

    private setUserInfoAndRedirect(token: string): void {
        window.localStorage.setItem('token', token);
        this.store.dispatch(loginSuccess({token: token}));
        this.router.navigate([SECURED__HOME]);
    }
}
