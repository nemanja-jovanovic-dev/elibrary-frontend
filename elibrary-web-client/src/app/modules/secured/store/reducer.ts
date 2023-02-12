import { createReducer, on } from '@ngrx/store';
import { LoggedUserState } from './logged-user-state.interface';
import * as Actions from './actions';

const initialState: LoggedUserState = {
    token: '',
    userInfo: null
};

export const securedReducer = createReducer(
    initialState,
    on(Actions.setToken, (state: LoggedUserState, {token}) => ({
        ...state,
        token
    })),
    on(Actions.setUserDetailsSuccess, (state: LoggedUserState, {userInfo}) => ({
        ...state,
        userInfo
    }))
);
