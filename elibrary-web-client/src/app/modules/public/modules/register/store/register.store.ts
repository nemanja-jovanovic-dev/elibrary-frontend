import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap, withLatestFrom } from 'rxjs';
import { UserRestService } from 'src/app/core/rest/login/user-rest.service';
import { RegisterFormValue } from '../components/register-form/register-form.component';

interface State {
    formValue: RegisterFormValue | null;
}

const INITIAL_STATE: State = {
    formValue: null
};

@Injectable()
export class RegisterStore extends ComponentStore<State> {
    formValue$ = this.select((state) => state.formValue);

    constructor(private userRestService: UserRestService) {
        super(INITIAL_STATE);
    }

    setFormValue = this.updater(
        (state: State, formValue: RegisterFormValue) => ({
            ...state,
            formValue
        })
    );

    register = this.effect((trigger$) =>
        trigger$.pipe(
            withLatestFrom(this.formValue$),
            exhaustMap(([_, formValue]: [void, RegisterFormValue | null]) => {
                return this.userRestService
                    .register(formValue as RegisterFormValue)
                    .pipe(
                        tapResponse(
                            (res) => {
                                console.log('response: ', res);
                            },
                            (err) => console.error(err)
                        )
                    );
            })
        )
    );
}
