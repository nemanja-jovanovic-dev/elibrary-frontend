import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { userSelector } from '.';
import { UserDetailsModel } from '../core/rest/login/model/login-response.model';
import { getUserDetailsSuccess, login, loginFail, loginSuccess } from './app.actions';

export interface State {
    username: string;
    password: string;
    authenticationMessage: string;
    userInfo: UserDetailsModel | null;
    token: string | null;
}

export const initialAppState: State = {
    username: '',
    password: '',
    authenticationMessage: '',
    userInfo: null,
    token: ''
};

export const getUserInfo = (state: State) => state.userInfo;
export const getToken = (state: State) => state.token;

export const reducer = createReducer(
    initialAppState as State,
    on(login, (state) => ({
        ...state
    })),
    on(loginSuccess, (state: State, {token}) => ({
        ...state,
        token: token
    })),
    on(loginFail, (state, { message }) => ({
        ...state,
        authenticationMessage: message
    })),
    on(getUserDetailsSuccess, (state: State, {userDetails}) => ({
        ...state,
        userInfo: userDetails
    }))
);

export function AppReducer(state: State, action: Action): State {
    return reducer(state as State, action as Action);
}
