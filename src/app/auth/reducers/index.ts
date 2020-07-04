import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { User } from '../model/user.model';
import { Authentication } from '../action-types';

export interface AuthState {
  user: User;
}

export const initialState: AuthState = {
  user: undefined
};

export const authReducers = createReducer(
  initialState,
  on(Authentication.login, (state, action) => {
    return {
      ...state,
      user: action.user
    };
  }),
  on(Authentication.logout, (state, action) => {
    return {
      user: undefined
    };
  })
);
