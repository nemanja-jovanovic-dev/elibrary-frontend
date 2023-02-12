import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs';
import { UserRestService } from '../core/rest/login/user-rest.service';
import * as fromActions from './app.actions';

@Injectable()
export class LoginEffect {
    constructor(
        private readonly actions$: Actions,
        private readonly loginRestService: UserRestService
    ) {}

    getUserDetails$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.getUserDetails),
            exhaustMap((action) =>
                this.loginRestService.getUserDetails(action.token).pipe(
                    map((data) => {
                        return fromActions.getUserDetailsSuccess({
                            userDetails: data
                        });
                    }),
                    catchError((err) => {
                        throw new Error(err);
                    })
                )
            )
        );
    });
}
