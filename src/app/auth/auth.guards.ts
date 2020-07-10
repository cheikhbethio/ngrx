import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { AppState } from "../reducers";
import { Observable } from "rxjs";
import { isloggedInSelector } from "./aut.selectors";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private store: Store<AppState>, private router: Router) { }
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.store.pipe(
			select(isloggedInSelector),
			tap(isloggedIn => {
				if (!isloggedIn) {
					this.router.navigateByUrl("/login");
				}
			})
		);
	}
}
