import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { LoggedUserState } from '../modules/secured/store/logged-user-state.interface';
import * as userReducer from './app.reducer';
import * as securedReducer from '../modules/secured/store/reducer';

export interface AppState {
    user: userReducer.State
}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer.reducer,
}

export const appStateSelector = createFeatureSelector<AppState>('user');

export const userSelector = createSelector(appStateSelector, (state: AppState) => state.user);

export const getUserInfo = createSelector(userSelector, userReducer.getUserInfo);
export const getToken = createSelector(userSelector, userReducer.getToken);
