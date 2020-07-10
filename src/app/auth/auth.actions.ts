import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const login = createAction(
	"[Login page] user login",
	props<{ user: User }>()
);

export const logout = createAction(
	"[Yop Menu] user logout"
);
