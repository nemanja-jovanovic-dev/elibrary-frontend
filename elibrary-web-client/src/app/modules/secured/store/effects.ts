import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs';
import { UserRestService } from 'src/app/core/rest/login/user-rest.service';
import { AppState } from '.';
import * as fromActions from './actions';

@Injectable()
export class SecuredEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly loginRestService: UserRestService,
        private readonly store: Store<AppState>
    ) {}

    getUserDetails$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(fromActions.setUserDetails),
            exhaustMap((action) => {
                return this.loginRestService.getUserDetails(action.token).pipe(
                    map((data) => {
                        return fromActions.setUserDetailsSuccess({
                            userInfo: data
                        });
                    }),
                    catchError((err) => {
                        throw new Error(err);
                    })
                );
            })
        );
    });
}
