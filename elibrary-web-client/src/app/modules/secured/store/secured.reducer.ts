import { Action, createReducer, on } from '@ngrx/store';
import * as fromActions from './secured.actions';

export interface State {}

export const initialState: State = {};

const featureReducer = createReducer(
    initialState,
    on(fromActions.Login, (state: State) => ({
        ...state
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return featureReducer(state, action);
}
