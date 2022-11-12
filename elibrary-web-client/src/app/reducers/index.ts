import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppReducer } from './app.reducer';


export interface State {

}

export const reducers: ActionReducerMap<State> = {
    appState: AppReducer
};
