import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { routerReducer } from "@ngrx/router-store";

export interface AppState {

}

const logger = function (reducer: ActionReducer<any>): ActionReducer<any> {
	return (state, action) => {
		console.log("logger -> state, action", state, action);
		return reducer(state, action);
	};
};

export const reducers: ActionReducerMap<AppState> = {
	router: routerReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
