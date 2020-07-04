import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './reducers';

export const AuthFeatureSelector = createFeatureSelector<AuthState>('auth');


export const isloggedInSelector = createSelector(
    AuthFeatureSelector,
    auth => !!auth.user
);

export const isloggedOutSelector = createSelector(
    isloggedInSelector,
    isloggedIn => !isloggedIn
);
