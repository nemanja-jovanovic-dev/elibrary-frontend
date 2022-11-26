import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as userReducer from './app.reducer';

export interface AppState {
    user: userReducer.State
}

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer.reducer
}

export const appStateSelector = createFeatureSelector<AppState>('user');

export const userSelector = createSelector(appStateSelector, (state: AppState) => state.user);

export const getUserInfo = createSelector(userSelector, userReducer.getUserInfo);
