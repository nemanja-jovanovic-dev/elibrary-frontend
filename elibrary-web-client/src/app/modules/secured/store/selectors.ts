import { createSelector } from "@ngrx/store";
import { AppState } from './index';

export const selectFeature = (state: AppState) => state.loggedUser;

export const token_selector = createSelector(selectFeature, (state) => state.token);
