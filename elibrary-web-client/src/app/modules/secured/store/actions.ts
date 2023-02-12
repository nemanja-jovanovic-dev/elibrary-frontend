import { createAction, props } from '@ngrx/store';
import { UserDetailsModel } from 'src/app/core/rest/login/model/login-response.model';

export const setToken = createAction(
    '[Logged user] Set token',
    props<{ token: string }>()
);

export const setUserDetails = createAction(
    '[Logged user] Set user details',
    props<{ token: string }>()
);

export const setUserDetailsSuccess = createAction(
    '[Logged user] Set user details success',
    props<{ userInfo: UserDetailsModel }>()
)
