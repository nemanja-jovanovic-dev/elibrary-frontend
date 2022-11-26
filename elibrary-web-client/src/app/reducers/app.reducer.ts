import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { userSelector } from '.';
import { LoginResponse } from '../core/rest/login/model/login-response.model';
import { login, loginFail, loginSuccess } from './app.actions';

export interface State {
    username: string;
    password: string;
    authenticationMessage: string;
    userInfo: LoginResponse | null;
}

export const initialAppState: State = {
    username: '',
    password: '',
    authenticationMessage: '',
    userInfo: null,
};

export const getUserInfo = (state: State) => state.userInfo;

export const reducer = createReducer(
    initialAppState as State,
    on(login, (state) => ({
        ...state
    })),
    on(loginSuccess, (state: State, {userInfo}) => ({
        ...state,
        userInfo: userInfo
    })),
    on(loginFail, (state, { message }) => ({
        ...state,
        authenticationMessage: message
    }))
);

export function AppReducer(state: State, action: Action): State {
    return reducer(state as State, action as Action);
}
