import { ActionReducerMap } from '@ngrx/store';
import * as securedReducer from './reducer';
import { LoggedUserState } from './logged-user-state.interface';

export interface AppState {
    loggedUser: LoggedUserState
}

export const reducers: ActionReducerMap<AppState> = {
    loggedUser: securedReducer.securedReducer
}
