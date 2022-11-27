import { createAction, props } from '@ngrx/store';
import { LoginResponse } from '../core/rest/login/model/login-response.model';

export const login = createAction(
    '[loginModule] log user Action',
    props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
    '[loginModule] log user Success Action',
    props<{token: string}>()
);

export const loginFail = createAction(
    '[loginModule] log user Fail Action',
    props<{ message: string }>()
);
